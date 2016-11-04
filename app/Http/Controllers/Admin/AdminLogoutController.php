<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Http\Requests;
use App\Facades\Admin;

class AdminLogoutController extends Controller
{
    public function logout(Request $r)
    {
        $user = Admin::user();
        if (!empty($user)) {
            $r->session()->pull('admin');
        }
        return redirect('/admin/login');
    }
}
