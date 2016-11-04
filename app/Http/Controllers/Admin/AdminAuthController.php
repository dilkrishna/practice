<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Http\Requests;

class AdminAuthController extends Controller
{
    public function getIndex(){
        return view('admin.login');
    }
    
    public function postIndex(){
        return $this->redirect();
    }
    
    protected function redirect(){
        return redirect('admin/page/list');
    }
}
