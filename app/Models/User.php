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
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function profile()
    {
        return $this->hasOne(Profile::class)->select([
            'user_id',
            'logo',
            'phone',
            'bio',
            'location',
            'facebook',
            'tweeter',
            'instagram',
            'tiktok',
            'whatsapp',
            'qr',
            'social_links'
        ]);
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
        $qrCode = new QrCode(route('profiles.show', $this));
        $qrCode->setSize(200);

        $path = "qrcodes/{$this->name}.png";
        (new PngWriter())->write($qrCode)->saveToFile(storage_path("app/public/{$path}"));

        return $path;
    }
}
