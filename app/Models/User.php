<?php

namespace App\Models;

use Endroid\QrCode\QrCode;
use Endroid\QrCode\Writer\PngWriter;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Storage;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'username',
        'password',
        'card_style',
        'card_bg_color',
        'card_text_color',
        'card_bg_gradient',
        'card_bg_type',
        'theme',
        'colors',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];


    public function getRouteKeyName()
    {
        return 'username';
    }

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
    protected $casts = [
        'colors' => 'array',
    ];

    public function profile()
    {
        return $this->hasOne(Profile::class);
    }

    protected static function booted()
    {
        static::created(function ($user) {
            $defaults = [
                'logo' => null,
                'phone' => null,
                'bio' => "Welcome to {$user->name}'s business profile!",
                'location' => null,
                'facebook' => null,
                'tweeter' => null,
                'instagram' => null,
                'tiktok' => null,
                'whatsapp' => null,
                'qr' => $user->generateQrCode(),
                'social_links' => json_encode([]),
            ];

            if (Storage::exists('public/defaults/profile-logo.png')) {
                $defaults['logo'] = 'defaults/profile-logo.png';
            }

            $user->profile()->create($defaults);
        });
    }


    public function generateQrCode()
    {

        if (app()->environment('testing')) {
            return 'app/public/default/logo.png'; // Return dummy path
        }
        $qrCode = new QrCode(route('profiles.info', $this));
        $qrCode->setSize(200);

        $path = "qrcodes/{$this->username}.png";
        (new PngWriter())->write($qrCode)->saveToFile(storage_path("app/public/{$path}"));

        return $path;
    }
}
