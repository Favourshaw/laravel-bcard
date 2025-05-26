<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserThemeController extends Controller
{
    public function update(Request $request)
    {
        $request->validate([
            'theme_template' => 'required|string',
            'theme_palette' => 'required|string',
        ]);

        $user = Auth::user();
        $user->update($request->only(['theme_template', 'theme_palette']));

        return response()->json(['message' => 'Theme updated successfully']);
    }
}
