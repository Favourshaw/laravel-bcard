<?php

use App\Http\Controllers\ProfileController as ControllersProfileController;
use App\Http\Controllers\TemplateController;
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
Route::get('/faq', function () {
    return Inertia::render('home/faq');
})->name('faq');
Route::get('/price', function () {
    return Inertia::render('home/price');
})->name('price');


Route::middleware(['auth', 'verified', 'role:admin,superadmin'])->group(function () {
    Route::get("/admin/dashboard", [TestController::class, "admin"])->name("admin");
    Route::resource("users", (UserController::class));
});
Route::middleware(['auth', 'verified', 'role:superadmin'])->group(function () {
    Route::get("/superadmin/system", [TestController::class, "superadmin"])->name("superadmin");
});
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('user/dashboard');
    })->name('dashboard');

    Route::get('/template', [TemplateController::class, 'index']);
    Route::post('/template/save-style', [TemplateController::class, 'saveStyle']);
    Route::get('profiles/edits', [ControllersProfileController::class, 'edits'])->name('profiles.edits');
    Route::resource("profiles", (ControllersProfileController::class))->except(['info', 'edits']);
});
Route::get('/tests', function () {
    return Inertia::render('user/test');
})->name('test');



require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
//alway put wildcard routes at the bottom
Route::get('{user:username}', [ControllersProfileController::class, 'info'])
    ->name('profiles.info');
Route::fallback(function () {
    return Inertia::render('notFound');
});
