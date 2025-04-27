<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home/index');
})->name('home');

Route::get('/about', function () {
    return Inertia::render('home/about');
})->name('about');


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('user/dashboard');
    })->name('dashboard');
    Route::get('template', function () {
        return Inertia::render('user/template');
    })->name('template');
    Route::resource("users", (UserController::class));
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
