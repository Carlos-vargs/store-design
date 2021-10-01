<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $fields = $request->validated();

        $user = User::create([
            'first_name' => $fields['first_name'],
            'last_name' => $fields['last_name'],
            'email' => $fields['email'],
            'password' => bcrypt($fields['password']),
        ]);

        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token,
        ];

        return response($response, 201);

    }

    public function logout(Request $request)
    {

        auth()->user()->tokens()->delete();

        return [
            'message' => 'logged out',
        ];
    }

    public function login(LoginRequest $request)
    {
        $fields = $request->validated();

        //check email
        $user = User::where('email', $fields['email'])->first();

        //check password
        if (!$user) {
            return response([
                'message' => 'Invalid email',
            ], 401);

        } elseif (!Hash::check($fields['password'], $user->password)) {
            return response([
                'message' => 'Invalid password',
            ], 401);
        }

        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token,
        ];

        return response($response, 201);

    }

}
