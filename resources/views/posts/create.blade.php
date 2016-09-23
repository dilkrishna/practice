@extends('layouts.app')
@section('content')
    <div class="container">
        <div>
            @if (count($errors) > 0)
                <div class="text-danger" role="alert" >
                    <strong> Errors:</strong>
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif
        </div>
        <a href="{{ route('post.index') }}" class=" btn btn-default pull-right btn-sm">Back</a>
        {{ Form::open(array('route'=> 'post.store', 'method'=> 'post', 'class'=> 'form-horizontal')) }}
        <div class="form-group">
            <label for="title" class="col-lg-2 control-label">Title</label>
            <div class="col-lg-3">
                {{--{{ Form::text($title, $value = null, $attributes = array('class'=>set_value())) }}--}}
                {{ Form::text('title')}}
            </div>
        </div>
        <br>

        <div class="form-group">
            <label for="title" class="col-lg-2 control-label">body</label>
            <div class="col-lg-3">
                {{ Form::textarea('body')}}
            </div>
        </div>

        <div class="form-group">
            <label for="title" class="col-lg-2 control-label"></label>
            <div class="col-lg-3">
                {{ Form::submit('Create', array('class'=>'btn btn-primary btn-sm'))}}
                {{ Form::reset('Reset',array('class'=>'btn btn-primary btn-sm')) }}
            </div>
        </div>
        {{ Form::close() }}
    </div>
@endsection