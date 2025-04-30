<?php

use App\Http\Controllers\TestController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\http\Middleware\RoleMiddleware;

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
});

Route::middleware(['auth', 'verified', 'role:admin,superadmin'])->group(function () {
    Route::get("/admin/dashboard", [TestController::class, "admin"])->name("admin");
    Route::resource("users", (UserController::class));
});
Route::middleware(['auth', 'verified', 'role:superadmin'])->group(function () {
    Route::get("/superadmin/system", [TestController::class, "superadmin"])->name("superadmin");
});
require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
