<?php

namespace App\Http\Controllers\Auth;

use App\Models\Employer;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\SignupEmployerRequest;

class EmployerAuthController extends Controller
{


    public function signupEmployer(SignupEmployerRequest $request)
    {
       $data = $request->validated();

        $employer = Employer::create([
        'name' => $data['name'] ?? null,
        'email' => $data['email'],
        'password' => bcrypt($data['password']),
        ]);

        $token = $employer->createToken('employer_token')->plainTextToken;

        return response()->json([
            'employer' => $employer,
            'token' => $token,
        ]);
    }


    public function loginEmployer(Request $request)
    {
    $data = $request->validated();

    if (!Auth::attempt($data)){
        return response([
            'message'=> 'email or password are wrong',
        ]);

    $employer = Auth::employer();
    $token = $employee->createToken('main')->plainTextToken;

    return response()->json([
        'employer' => $employer,
        'token'=> $token
    ]);
        }
    }
}
