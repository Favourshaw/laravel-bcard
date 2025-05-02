<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(User $user)
    {
        $user = Auth::user()->load('profile');

        // Transform data for frontend
        $data = [
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'created_at' => $user->created_at->toDateTimeString(),
                'profile' => $user->profile ? [
                    'bio' => $user->profile->bio,
                    'phone' => $user->profile->phone,
                    'facebook' => $user->profile->facebook,
                    'tweeter' => $user->profile->tweeter,
                    'instagram' => $user->profile->instagram,
                    'tiktok' => $user->profile->tiktok,
                    'whatsapp' => $user->profile->whatsapp,
                    'qr' => $user->profile->qr,
                    'logo' => $user->profile->avatar ?
                        asset('storage/' . $user->profile->avatar) : null,
                    'location' => $user->profile->location,
                    'social_links' => $user->profile->social_links ?? []
                ] : null
            ]
        ];
        return Inertia::render('user/profile', $data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    public function show(Request $request)
    {
        //
    }

    public function edit(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function info(User $user)
    {
        // No authorization gate needed for public viewing
        // Load the profile with only public-facing fields
        $user->load(['profile' => function ($query) {
            $query->select([
                'user_id',
                'logo',
                'bio',
                'location',
                'facebook',
                'tweeter as twitter',
                'instagram',
                'tiktok',
                'whatsapp',
                'qr',
            ]);
        }]);

        return Inertia::render('user/business', [
            'profileData' => [
                'user' => [
                    'id' => $user->id,
                    'name' => $user->name,
                    'username' => $user->username,
                    'created_at' => $user->created_at,
                ],
                'profile' => $user->profile ? $user->profile->only([
                    'logo',
                    'phone',
                    'bio',
                    'location',
                    'facebook',
                    'twitter',
                    'instagram',
                    'tiktok',
                    'whatsapp',
                    'qr',
                    'social_links'
                ]) : null
            ],
            'canEdit' => auth()->check() && auth()->id() === $user->id
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edits()
    {
        $user = Auth::user()->load('profile');

        return Inertia::render('user/edit-profile', [
            'user' => [
                'id' => $user->id,
                'profile' => $user->profile,
            ],
        ]);
    }




    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $user = Auth::user();

        $validated = $request->validate([
            'logo' => 'nullable|image|max:2048', // file input validation
            'phone' => 'nullable|string|max:20',
            'bio' => 'nullable|string|max:1000',
            'location' => 'nullable|string|max:255',
            'facebook' => 'nullable|url',
            'twitter' => 'nullable|url',
            'instagram' => 'nullable|url',
            'tiktok' => 'nullable|url',
            'whatsapp' => 'nullable|string|max:20',
        ]);

        $profile = $user->profile ?? new Profile(['user_id' => $user->id]);

        // ✅ Handle logo upload
        if ($request->hasFile('logo')) {
            // Delete old logo if it exists
            if ($profile->logo) {
                Storage::disk('public')->delete($profile->logo);
            }

            $logoPath = $request->file('logo')->store('logos', 'public');
            $profile->logo = $logoPath;
        }

        $profile->phone = $validated['phone'] ?? $profile->phone;
        $profile->bio = $validated['bio'] ?? $profile->bio;
        $profile->location = $validated['location'] ?? $profile->location;
        $profile->facebook = $validated['facebook'] ?? $profile->facebook;
        $profile->tweeter = $validated['twitter'] ?? $profile->tweeter;
        $profile->instagram = $validated['instagram'] ?? $profile->instagram;
        $profile->tiktok = $validated['tiktok'] ?? $profile->tiktok;
        $profile->whatsapp = $validated['whatsapp'] ?? $profile->whatsapp;

        $profile->save();

        return redirect()->back()->with('success', 'Profile updated successfully.');
    }





    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Profile $profile)
    {
        //
    }
}
