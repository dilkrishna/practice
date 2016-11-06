<?php
namespace App\Traits;

use App\Facades\Admin;
use Illuminate\Http\Request;

trait LogoutAdmin
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