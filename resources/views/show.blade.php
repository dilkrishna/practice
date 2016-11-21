@extends('layouts.app')
    <?php
    if (!session_id()) {
        session_start();
    }
    $fb = new Facebook\Facebook([
            'app_id' => '271680366562240',
            'app_secret' => '631616238aeefd27ff453e63ce45f81d',
            'default_graph_version' => 'v2.8',
    ]);

    $helper = $fb->getRedirectLoginHelper();

    $permissions = ['email']; // Optional permissions
    $loginUrl = $helper->getLoginUrl('http://practice.org/test', $permissions);

    ?> <div class="pull-right"><?php echo '<a href="' . $loginUrl . '">Log in with Facebook!</a>'; ?></div>

@section('content')
    <div class="container">
        @if(!empty($facebook))
        {{$facebook['name']}}
        @endif
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <div class="panel panel-default">
                    <div class="panel-heading text-right">Posted By: <strong class="text-danger">{{ $post->name }}</strong></div>

                    <div class="panel-body">
                        <div class="col-lg-12">
                            <div class="col-lg-7">
                                <h2>Title : {{ $post->title }}</h2>
                            </div>
                            <div class="col-lg-5">
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
                        </div>
                        <hr><hr>
                        <div class="panel-body col-lg-12">
                            <p class="text-justify">{{ $post->body }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection