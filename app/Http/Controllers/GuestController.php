<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Post;

class GuestController extends Controller
{
    public function getIndex()
    {
        $posts = Post::all();
        return view('home',compact('posts'));
    }

    public function getShow($id)
    {
        $post = Post::findOrFail($id);
        return view('show',compact('post'));
    }
}
