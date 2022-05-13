<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;

class AuthController extends Controller
{
    use  CanResetPassword;

    public function login(Request $request)
    {
        $this->validate($request, ['email' => 'required', 'password' => 'required']);

        $staff = User::query()->where('email', $request->get('email'))->first();
        if (blank($staff))
            return response()->json(['message' => "User not found"], 400);


        $found = Hash::check($request->get('password'), $staff->password);
        if (!$found)
            return response()->json(['message' => "Invalid credential"], 400);

        \auth()->login($staff);

        $token = $staff->createToken('personal_access_token', [])->plainTextToken;
        return response()->json([
            'token' => $token,
            'user' => $staff,
        ], 200);
    }

    public function logout(Request $request)
    {
        \auth()->user()?->tokens()->delete();
        return response()->json([
            'data' => null
        ], 200);
    }

    public function resetPassword(Request $request)
    {
        $request->validate([
            'token' => ['required'],
            'email' => ['required', 'email'],
            'password' => ['required', 'confirmed', 'min:6'],
        ]);

        // Here we will attempt to reset the user's password. If it is successful we
        // will update the password on an actual user model and persist it to the
        // database. Otherwise we will parse the error and return the response.
        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user) use ($request) {
                $user->password = $request->password;
                $user->save();
//                event(new PasswordReset($user));
            }
        );

        return [
            'status' => $status == Password::PASSWORD_RESET,
            'message' => __($status)
        ];
    }



}
