<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\Post;
use Session;
use Validator;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::orderBy('id','desc')->paginate(10);
        return view('posts.index',['posts'=>$posts]);
    }

    public function create()
    {
        return view('posts.create');
    }

    public function store(Request $request)
    {
        //validation
        $this->validate($request, [
            'title' => 'required',
            'body' => 'required',
        ]);

            // insert into database
        $post = new Post;
        $post->title  =  $request->title;
        $post->body   =  $request->body;

        $post->save();

    }

    public function show($id)
    {
        $post = Post::find($id);
        return view('posts.show',['post'=>$post]);
    }

    public function edit($id)
    {
        $post = Post::find($id);
        return view('posts.edit',['post'=>$post]);
    }

    public function update(Request $request,$id)
    {   // validation
        $validator = Validator::make($request->all(),[
            'title' => 'required',
            'body' => 'required',
        ]);
        $data = [ $id ,['errors'=> $validator->errors()]];

        if($validator->fails()){
            return redirect()->route('post.edit',compact('data'));
//            return view('posts.edit', compact('data'));
        }
        // insert into database
        $post = Post::find($id);
        $post->title  =  $request->input('title');
        $post->body   =  $request->input('body');

        $post->save();

        Session::flash('success', 'The blog is successfully save !');

        return redirect()->route('post.show',[$request->id]);

    }


    public function destroy($id)
    {
//     die('destroy');
        $post =Post::findOrfail($id);
        $post->delete();

        return redirect()->route('post.index');
    }
}