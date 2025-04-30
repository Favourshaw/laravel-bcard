<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TestController extends Controller
{
    public function admin(): Response {
        return Inertia::render("admin/dashboard");
    }

    public function superadmin(): Response {
        return Inertia::render("superadmin/system");
    }
}
