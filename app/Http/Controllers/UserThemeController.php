<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UserThemeController extends Controller
{
    public function update(Request $request)
    {
        $request->validate([
            'theme' => 'required|string',
            'colors' => 'required|array',
            'colors.primary' => 'required|string',
            'colors.secondary' => 'required|string',
            'colors.text' => 'required|string',
        ]);

        $user = auth()->user();

        $user->update([
            'theme' => $request->theme,
            'colors' => $request->colors,
        ]);

        return back()->with('success', 'Customization saved!');
    }
}
