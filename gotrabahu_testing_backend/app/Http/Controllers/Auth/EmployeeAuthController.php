<?php

namespace App\Http\Controllers\Auth;

use App\Models\Employee;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\SignupEmployeeRequest;
use App\Http\Requests\LoginEmployeeRequest;


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
        $employee = Auth::guard('employee')->user();

        if ($employee) {
            // Revoke the current access token instead of deleting all tokens
            $token = $request->user()->currentAccessToken();
            if ($token) {
                $token->delete();
                return response()->json(['message' => 'Logged out successfully'], 200);
            }
            return response()->json(['message' => 'No current access token found'], 400);
        }

        return response()->json(['message' => 'Unable to logout'], 400);
    }

}
