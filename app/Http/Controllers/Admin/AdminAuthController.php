<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Http\Requests;
use App\Http\Requests\AdminRequest;
use App\Admin;
use Exception;
use Illuminate\Support\Facades\Hash;


class AdminAuthController extends Controller
{
    public function getIndex(){

        if (!empty($this->user)) {
            return $this->redirect();
        }
        return view('admin.login');
    }

    public function postIndex(AdminRequest $r){
        try {
            if (!empty($this->user)) {
                return $this->redirect();
            }

            $exists = $this->attempt($r->all());
            if ($exists) {
                $this->startSession();
            }
            return $this->redirect();
        } catch (Exception $e) {
            return redirect('/admin/login')->with('error', $e->getMessage());
        }
    }
    public function postLogout(Request $r)
    {
        $user = Admin::user();
        if (!empty($user)) {
            $r->session()->pull('admin');
        }
        return redirect('/admin/login');
    }
    protected function startSession()
    {
        $session = request()->session();
        $session->put('admin', $this->user->toArray());
    }

    protected function attempt($data = [])
    {
        $user = Admin::where('email', $data['email'])->first();
        if (empty($user) || !Hash::check($data['password'], $user->password)) {
            throw new Exception(trans('auth.failed'));
        }
        if ($user->type != 1) {
            throw new Exception(trans('auth.forbidden'));
        }
        $this->user = $user;
        return true;
    }


    protected function redirect(){
        return redirect('admin/page/list');
    }
}
