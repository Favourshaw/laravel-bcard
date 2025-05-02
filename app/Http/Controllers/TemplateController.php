<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class TemplateController extends Controller
{

    public function index()
    {
        $user = Auth::user()->load('profile');

        return Inertia::render('user/template', [
            'auth' => [
                'user' => $user,
            ],
        ]);
    }
    public function saveStyle(Request $request)
    {
        // dd($request->all());
        $user = Auth::user();

        $validated = $request->validate([
            'card_style' => 'required|string',
            'card_bg_color' => 'nullable|string',
            'card_bg_type' => 'nullable|string',
            'card_bg_gradient' => 'nullable|string|regex:/^linear-gradient\((.*?)\)$/',
            'card_text_color' => 'nullable|string',
        ]);

        $user->update([
            'card_style' => $validated['card_style'],
            'card_bg_color' => $validated['card_bg_color'],
            'card_bg_type' => $validated['card_bg_type'],
            'card_bg_gradient' => $validated['card_bg_gradient'],  // Save the gradient here
            'card_text_color' => $validated['card_text_color'],
        ]);
        if ($user->update($validated)) {
            return redirect()->back()->with('success', 'Design updated successfully!');
        } else {
            return redirect()->back()->with('error', 'Failed to update design.');
        }
    }
}
