@extends('layouts.app')
@section('content')
    <div class="container">
        <div class="col-lg-12">
            @if(Session::has('success'))
                <div class="alert alert-success" role="alert">
                    <strong> Success:</strong> {!! Session::get('success') !!}
                </div>
            @endif
            <div class="col-lg-6">
                <h1>Title : {{ $post->title }}</h1>
             </div>
            <div class="col-lg-4">
                <div>
                    <dl class="dl-horizontal">
                        <dt class="text-success">Created At :</dt>
                        <dl class="text-info">{{ date('M j ,Y h:i A',strtotime($post->created_at)) }}</dl>
                    </dl>
                    <dl class="dl-horizontal">
                        <dt class="text-success">Updated At :</dt>
                        <dl class="text-info">{{ date('M j ,Y h:i A',strtotime($post->updated_at)) }}</dl>
                    </dl>
                </div>
            </div>
            <div class="col-lg-2">
                <a href="{{ route('post.edit',$post->id) }}" class="btn btn-primary btn-sm  btn-success"> Edit</a>
                <a href="{{ route('post.index') }}" class="btn btn-primary btn-sm btn-danger">Back to Post</a>
            </div>
        </div>
        <br><br>
        <div class="col-lg-12">
            <p class="text-justify">{{ $post->body }}</p>
            {!! Form::model($post, ['method' => 'DELETE','route' => ['post.update', $post->id]]) !!}
            {{ Form::submit('Delete', array('class'=>'btn btn-danger btn-sm pull-right'))}}
            {!! Form::close() !!}
        </div>
    </div>
@endsection