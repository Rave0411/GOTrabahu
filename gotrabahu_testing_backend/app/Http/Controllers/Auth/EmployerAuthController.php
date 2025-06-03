<?php

namespace App\Http\Controllers\Auth;

use App\Models\Employer;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\LoginEmployerRequest;
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


    public function loginEmployer(LoginEmployerRequest $request)
    {
        $data = $request->validated();

        if (!Auth::guard('employer')->attempt($data)) {
            return response([
                'message' => 'email or password are wrong',
            ], 401);
        }

        $employer = Auth::guard('employer')->user();
        $token = $employer->createToken('main')->plainTextToken;

        return response()->json([
            'employer' => $employer,
            'token' => $token
        ]);
    }

        public function logoutEmployer(Request $request)
    {
        $employer = $request ->employee();

        $employer->currentAccessToken()->delete();
        return response('',204);
    }
}
