<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
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
    public function edit(Profile $profile)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $user = Auth::user();

        $validated = $request->validate([
            'bio' => 'nullable|string|max:800',
            'logo' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'location' => 'nullable|string|max:100',
            'phone' => 'nullable|string|max:30',
            'facebook' => 'nullable|string|max:100',
            'tweeter' => 'nullable|string|max:100',
            'instagram' => 'nullable|string|max:100',
            'tiktok' => 'nullable|string|max:100',
            'whatsapp' => 'nullable|string|max:100',
            'qr' => 'nullable|string|max:100',
            'social_links' => 'nullable|array',
            'social_links.*' => 'nullable|url'
        ]);

        // Handle avatar upload
        if ($request->hasFile('avatar')) {
            $path = $request->file('avatar')->store('avatars', 'public');
            $validated['avatar'] = $path;
        } else {
            unset($validated['avatar']);
        }

        // Update or create profile
        if ($user->profile) {
            $user->profile()->update($validated);
        } else {
            $user->profile()->create($validated);
        }

        return redirect()->back()->with('success', 'Profile updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Profile $profile)
    {
        //
    }
}
