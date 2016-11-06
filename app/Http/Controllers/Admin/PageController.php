<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Http\Requests;
use App\Admin;

class PageController extends Controller
{
    public function getList(){
        return view('admin.page.list');
    }
}
