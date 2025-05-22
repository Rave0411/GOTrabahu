<?php

namespace App\Http\Controllers\Auth;

use App\Models\Employee;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\SignupEmployeeRequest;



class EmployeeAuthController extends Controller
{


    public function signupEmployee(SignupEmployeeRequest $request)
    {
       $data = $request->validated();

        $employee = Employee::create([
        'name' => $data['name'] ?? null,
        'email' => $data['email'],
        'password' => bcrypt($data['password']),,
        ]);

        $token = $employee->createToken('main')->plainTextToken;

        return response()->json([
            'user' => $employee,
            'token' => $token,
        ]);
    }

    public function loginEmployee(Request $request)
    {
    $data = $request->validated();

    if (!Auth::attempt($data)){
        return response([
            'message'=> 'email or password are wrong',
        ]);

    $employee = Auth::employee();
    $token = $employee->createToken('main')->plainTextToken;

    return response()->json([
        'employee' => $employee,
        'token'=> $token
    ]);
        }
    }

    public function logout(Request $request)
    {
        $employee = $request ->employee();

        $employee->currentAccessToken()->delete();
        return response('',204);
    }

}
