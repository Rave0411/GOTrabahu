<?php

namespace App\Http\Controllers\Auth;

use App\Models\Employer;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\LoginEmployerRequest;
use App\Http\Requests\SignupEmployerRequest;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Carbon;

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
        $employer = Auth::guard('employer')->user();

        if ($employer) {
            $token = $request->user()->currentAccessToken();
            if ($token) {
                $token->delete();
                return response()->json(['message' => 'Logged out successfully'], 200);
            }
            return response()->json(['message' => 'No current access token found'], 400);
        }

        return response()->json(['message' => 'Unable to logout'], 400);
    }

    public function requestPasswordReset(Request $request)
    {
        $request->validate(['email' => 'required|email']);

        $email = $request->email;

        $employer = Employer::where('email', $email)->first();
        if (!$employer) {
            return response()->json(['message' => 'Email not found'], 404);
        }

        $token = Str::random(6);

        DB::table('password_resets')->updateOrInsert(
            ['email' => $email],
            ['token' => $token, 'created_at' => Carbon::now()]
        );

        Mail::raw("Your password reset code is: $token", function ($message) use ($email) {
            $message->to($email)
                ->subject('Password Reset Code');
        });

        return response()->json(['message' => 'Password reset code sent to your email']);
    }

    public function verifyResetCode(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'token' => 'required|string',
        ]);

        $record = DB::table('password_resets')
            ->where('email', $request->email)
            ->where('token', $request->token)
            ->first();

        if (!$record) {
            return response()->json(['message' => 'Invalid token'], 400);
        }

        $createdAt = Carbon::parse($record->created_at);
        if (Carbon::now()->diffInMinutes($createdAt) > 60) {
            return response()->json(['message' => 'Token expired'], 400);
        }

        return response()->json(['message' => 'Token is valid']);
    }

    public function resetPassword(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'token' => 'required|string',
            'password' => 'required|string|confirmed|min:6',
        ]);

        $record = DB::table('password_resets')
            ->where('email', $request->email)
            ->where('token', $request->token)
            ->first();

        if (!$record) {
            return response()->json(['message' => 'Invalid token'], 400);
        }

        $createdAt = Carbon::parse($record->created_at);
        if (Carbon::now()->diffInMinutes($createdAt) > 60) {
            return response()->json(['message' => 'Token expired'], 400);
        }

        $employer = Employer::where('email', $request->email)->first();
        if (!$employer) {
            return response()->json(['message' => 'Email not found'], 404);
        }

        $employer->password = bcrypt($request->password);
        $employer->save();

        DB::table('password_resets')->where('email', $request->email)->delete();

        return response()->json(['message' => 'Password has been reset successfully']);
    }
}
