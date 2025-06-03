<?php

namespace App\Http\Controllers\Auth;

use App\Models\Employee;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\SignupEmployeeRequest;
use App\Http\Requests\LoginEmployeeRequest;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Carbon;

class EmployeeAuthController extends Controller
{
      public function signupEmployee(SignupEmployeeRequest $request)
    {
       $data = $request->validated();

        $employee = Employee::create([
        'name' => $data['name'] ?? null,
        'email' => $data['email'],
        'password' => bcrypt($data['password']),
        ]);

        $token = $employee->createToken('employee_token')->plainTextToken;

        return response()->json([
            'employee' => $employee,
            'token' => $token,
        ]);
    }

    public function loginEmployee(LoginEmployeeRequest $request)
    {
        $data = $request->validated();

        if (!Auth::guard('employee')->attempt($data)) {
            return response([
                'message' => 'email or password are wrong',
            ], 401);
        }

        $employee = Auth::guard('employee')->user();
        $token = $employee->createToken('main')->plainTextToken;

        return response()->json([
            'employee' => $employee,
            'token' => $token
        ]);
    }

    public function logoutEmployee(Request $request)
    {
        $employee = Auth::guard('employee-api')->user();

        if ($employee) {
            // Get the current access token from the employee user
            $token = $employee->currentAccessToken();
            if ($token) {
                $token->delete();
                return response()->json(['message' => 'Logged out successfully'], 200);
            }
            return response()->json(['message' => 'No current access token found'], 400);
        }

        return response()->json(['message' => 'Unable to logout'], 400);
    }


    public function updateProfile(Request $request)
    {
        $user = Auth::guard('employee')->user();

        if (!$user) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $validatedData = $request->validate([
            'lastName' => 'nullable|string|max:255',
            'firstName' => 'nullable|string|max:255',
            'middleName' => 'nullable|string|max:255',
            'extensionName' => 'nullable|string|max:255',
            'gender' => 'nullable|string|in:Male,Female',
            'age' => 'nullable|integer|min:0',
            'dateOfBirth' => 'nullable|date',
            'nationality' => 'nullable|string|max:255',
            'email' => 'nullable|email|max:255',
            'contactNumber' => 'nullable|string|max:20',
            'address' => 'nullable|string|max:255',
            'province' => 'nullable|string|max:255',
            'city' => 'nullable|string|max:255',
            'barangay' => 'nullable|string|max:255',
            'zipCode' => 'nullable|string|max:20',
            'emergencyContactPerson' => 'nullable|string|max:255',
            'emergencyAddress' => 'nullable|string|max:255',
            'emergencyContactNumber' => 'nullable|string|max:20',
        ]);

        // Update user fields
        $user->lastName = $validatedData['lastName'] ?? $user->lastName;
        $user->firstName = $validatedData['firstName'] ?? $user->firstName;
        $user->middleName = $validatedData['middleName'] ?? $user->middleName;
        $user->extensionName = $validatedData['extensionName'] ?? $user->extensionName;
        $user->gender = $validatedData['gender'] ?? $user->gender;
        $user->age = $validatedData['age'] ?? $user->age;
        $user->dateOfBirth = $validatedData['dateOfBirth'] ?? $user->dateOfBirth;
        $user->nationality = $validatedData['nationality'] ?? $user->nationality;
        $user->email = $validatedData['email'] ?? $user->email;
        $user->contactNumber = $validatedData['contactNumber'] ?? $user->contactNumber;
        $user->address = $validatedData['address'] ?? $user->address;
        $user->province = $validatedData['province'] ?? $user->province;
        $user->city = $validatedData['city'] ?? $user->city;
        $user->barangay = $validatedData['barangay'] ?? $user->barangay;
        $user->zipCode = $validatedData['zipCode'] ?? $user->zipCode;
        $user->emergencyContactPerson = $validatedData['emergencyContactPerson'] ?? $user->emergencyContactPerson;
        $user->emergencyAddress = $validatedData['emergencyAddress'] ?? $user->emergencyAddress;
        $user->emergencyContactNumber = $validatedData['emergencyContactNumber'] ?? $user->emergencyContactNumber;

        $user->save();

        return response()->json(['message' => 'Profile updated successfully', 'employee' => $user]);
    }
}
