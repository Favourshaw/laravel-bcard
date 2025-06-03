<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

class ProfileController extends Controller
{
    public function index(User $user)
    {
        $user = Auth::user()->load('profile');

        $profile = $user->profile;

        $data = [
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'created_at' => $user->created_at->toDateTimeString(),
                'profile' => $profile ? [
                    'bio' => $profile->bio,
                    'avatar' => $profile->avatar,
                    'description' => $profile->description,
                    'phone' => $profile->phone,
                    'facebook' => $profile->facebook,
                    'tweeter' => $profile->tweeter,
                    'instagram' => $profile->instagram,
                    'tiktok' => $profile->tiktok,
                    'whatsapp' => $profile->whatsapp,
                    'qr' => $profile->qr,
                    'linkedin' => $profile->linkedin,
                    'snapchat' => $profile->snapchat,
                    'github' => $profile->github,
                    'others' => $profile->others,
                    'bname' => $profile->bname,
                    'bmail' => $profile->bmail,
                    'behance' => $profile->behance,
                    'dribble' => $profile->dribble,
                    'slogan' => $profile->slogan,
                    'logo' => $profile->logo ? asset('storage/' . $profile->logo) : null,
                    'location' => $profile->location,
                    'social_links' => $profile->social_links ?? [],
                ] : null
            ]
        ];

        return Inertia::render('user/profile', $data);
    }



    public function info(User $user)
    {
        $user->load('profile');

        $view = Route::currentRouteName() === 'user.links' ? 'user/links' : 'user/business';

        return Inertia::render($view, [
            'profileData' => [
                'user' => [
                    'id' => $user->id,
                    'name' => $user->name,
                    'username' => $user->username,
                    'created_at' => $user->created_at,
                    'theme' => $user->theme,
                    'colors' => $user->colors,
                ],
                'profile' => $user->profile ? $user->profile->only([
                    'logo',
                    'avatar',
                    'description',
                    'phone',
                    'bio',
                    'skills',
                    'location',
                    'facebook',
                    'tweeter',
                    'tweetter',
                    'instagram',
                    'tiktok',
                    'whatsapp',
                    'qr',
                    'linkedin',
                    'snapchat',
                    'github',
                    'others',
                    'bname',
                    'bmail',
                    'behance',
                    'dribble',
                    'slogan',
                    'social_links'
                ]) : null,
            ],
            'canEdit' => auth()->check() && auth()->id() === $user->id
        ]);
    }



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

    public function update(Request $request)
    {
        $user = Auth::user();

        $validated = $request->validate([
            'logo' => 'nullable|image|max:2048',
            'avatar' => 'nullable|image|max:2048', // New avatar field
            'phone' => 'nullable|string|max:20',
            'description' => 'nullable|string|max:2048',
            'slogan' => 'nullable|string|max:30',
            'bio' => 'nullable|string|max:1000',
            'location' => 'nullable|string|max:255',
            'facebook' => 'nullable|url',
            'tweetter' => 'nullable|url',
            'instagram' => 'nullable|url',
            'tiktok' => 'nullable|url',
            'whatsapp' => 'nullable|string|max:20',
            'linkedin' => 'nullable|url',
            'snapchat' => 'nullable|url',
            'github' => 'nullable|url',
            'others' => 'nullable|string|max:255',
            'bname' => 'nullable|string|max:255',
            'bmail' => 'nullable|email|max:255',
            'behance' => 'nullable|url',
            'dribble' => 'nullable|url',
            'skills' => 'nullable|array',
            'skills.*' => 'string|max:100',
        ]);

        $profile = $user->profile ?? new Profile(['user_id' => $user->id]);

        // Handle logo upload
        if ($request->hasFile('logo')) {
            if ($profile->logo) {
                Storage::disk('public')->delete($profile->logo);
            }
            $logoPath = $request->file('logo')->store('logos', 'public');
            $profile->logo = $logoPath;
        }

        // Handle avatar upload
        if ($request->hasFile('avatar')) {
            if ($profile->avatar) {
                Storage::disk('public')->delete($profile->avatar);
            }
            $avatarPath = $request->file('avatar')->store('avatars', 'public');
            $profile->avatar = $avatarPath;
        }

        // Apply remaining validated fields (skip files)
        foreach ($validated as $key => $value) {
            if (in_array($key, ['logo', 'avatar'])) continue;
            $profile->{$key} = $value ?? $profile->{$key};
        }

        // Compatibility for legacy tweeter field
        $profile->tweeter = $validated['twitter'] ?? $profile->tweeter;

        $profile->save();

        return redirect()->back()->with('success', 'Profile updated successfully.');
    }


    public function destroy(Profile $profile)
    {
        //
    }

    public function create() {}
    public function store(Request $request) {}
    public function show(Request $request) {}
}
