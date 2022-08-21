<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class DashboardController extends Controller
{
    public function index()
    {
        return inertia('Admin/Dashboard/Index');
    }
}