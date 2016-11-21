<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use Illuminate\Http\Request;
use App\Post;
use Auth;
use Session;
class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
//    public function __construct()
//    {
//        $this->middleware('auth');
//    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */

    public function __construct(Request $request)
    {
        $lang = 'en';
        if ($request->session()->has('i18')) {
            $lang = $request->session()->get('i18');
        }
        $request->session()->set('i18', $lang);
        app()->setLocale($lang);

    }

    public function i18(Request $r)
    {
        $lang = $r->segment('2');
        $dir = resource_path('/lang/' . $lang);
        $i18 = file_exists($dir) && is_dir($dir) ? $lang : 'en';
        $r->session()->set('i18', $i18);
        return redirect()->back();
    }

    public function index()
    {
        $posts = Post::all();
        $facebook = Session::get('facebook');
        return view('home',compact('posts','facebook'));
    }

    public function show($id)
    {
        $post = Post::findOrFail($id);
        $facebook = Session::get('facebook');
        return view('show',compact('post','facebook'));
    }
}
