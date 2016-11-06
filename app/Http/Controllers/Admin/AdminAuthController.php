<?php

namespace App\Http\Controllers\Admin;

use App\Traits\AuthenticateAdmin;
use App\Traits\LogoutAdmin;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Http\Requests;
use App\Http\Requests\AdminRequest;
use App\Facades\Admin;
use Exception;
use Illuminate\Support\Facades\Hash;



class AdminAuthController extends Controller
{
    use AuthenticateAdmin, LogoutAdmin;
    public function __construct()
    {
        $this->user = Admin::user();
    }
    
    

}
