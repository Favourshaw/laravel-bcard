<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Profile extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'logo',
        'phone',
        'bio',
        'location',
        'facebook',
        'tweeter', // Consider renaming to 'twitter' for consistency
        'instagram',
        'slogan',
        'tiktok',
        'whatsapp',
        'qr',
        'social_links'
    ];

    protected $casts = [
        'social_links' => 'array',
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
