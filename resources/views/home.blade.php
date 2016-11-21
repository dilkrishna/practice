@extends('layouts.app')

@section('content')
    <div class="container">
        {{--facelogin script--}}
        <script>
            // This is called with the results from from FB.getLoginStatus().
            function statusChangeCallback(response) {
                console.log('statusChangeCallback');
                console.log(response);
                // The response object is returned with a status field that lets the
                // app know the current login status of the person.
                // Full docs on the response object can be found in the documentation
                // for FB.getLoginStatus().
                if (response.status === 'connected') {
                    // Logged into your app and Facebook.
                    testAPI();
                } else if (response.status === 'not_authorized') {
                    // The person is logged into Facebook, but not your app.
                    document.getElementById('status').innerHTML = 'Please log ' +
                            'into this app.';
                } else {
                    // The person is not logged into Facebook, so we're not sure if
                    // they are logged into this app or not.
                    document.getElementById('status').innerHTML = 'Please log ' +
                            'into Facebook.';
                }
            }

            // This function is called when someone finishes with the Login
            // Button.  See the onlogin handler attached to it in the sample
            // code below.
            function checkLoginState() {
                FB.getLoginStatus(function (response) {
                    statusChangeCallback(response);
                });
            }

            window.fbAsyncInit = function () {
                FB.init({
                    appId: '271680366562240',
                    app_secret: '631616238aeefd27ff453e63ce45f81d',
                    cookie: true,  // enable cookies to allow the server to access
                                   // the session

                    xfbml: true,  // parse social plugins on this page
                    version: 'v2.8' // use graph api version 2.8
                });

                // Now that we've initialized the JavaScript SDK, we call
                // FB.getLoginStatus().  This function gets the state of the
                // person visiting this page and can return one of three states to
                // the callback you provide.  They can be:
                //
                // 1. Logged into your app ('connected')
                // 2. Logged into Facebook, but not your app ('not_authorized')
                // 3. Not logged into Facebook and can't tell if they are logged into
                //    your app or not.
                //
                // These three cases are handled in the callback function.

                FB.getLoginStatus(function (response) {
                    statusChangeCallback(response);
                });

            };

            // Load the SDK asynchronously
            (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src = "//connect.facebook.net/en_US/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));

            // Here we run a very simple test of the Graph API after login is
            // successful.  See statusChangeCallback() for when this call is made.
            function testAPI() {
                console.log('Welcome!  Fetching your information.... ');
                FB.api('/me', function (response) {
                    console.log('Successful login for: ' + response.name);
                    document.getElementById('status').innerHTML =
                            'Thanks for logging in, ' + response.name + '!';
                    {
                        $.ajax({
                            type: "POST",
                            url: '/test',
                            data: response,
                            success: function () {
//                                location.reload();
                                console.log('hello');
                            },
                            error: function () {
                                bootbox.alert("Error");
                            }
                        });
                    }


                });
            }
        </script>

        {{--end of facebook login--}}
        {{--<script type="text/javascript"> <!----}}
        {{--var nc_width = 'responsive';--}}
        {{--var nc_height = 565;--}}
        {{--var nc_api_id = "8221x1g161"; //-->--}}
        {{--</script>--}}
        {{--<script type="text/javascript" src="http://www.ashesh.com.np/nepali-calendar/js/ncf.js"></script>--}}


        {{--<fb:login-button scope="public_profile,email" onlogin="checkLoginState();">--}}
        {{--</fb:login-button>--}}
        @if(empty($facebook))
            <div class="fb-login-button pull-right" data-max-rows="1" data-size="medium" data-show-faces="false"
                 data-auto-logout-link="false"></div>
        @endif
        @if(!empty($facebook))
            <a class="pull-right" href="{{url('/facebook/logout')}}">Logout</a>
        @endif
        <div class="pull-right" id="status">
        </div>


        {{--<div class="pull-right"><fb:login-button scope="public_profile,email" onlogin="checkLoginState();">Log in With Facebook--}}
        {{--</fb:login-button>--}}
        {{--</div>--}}
        {{--<div style="width: 30%; float: left; margin-top: 30px; ">--}}
        {{--<ins style="width:350px;height:420px;margin-left: 15px;" class="nepalipatro-wg" widget="monthsmall"/>--}}
        {{--<div id="ncwidgetlink">Powered by © <a href="http://www.ashesh.com.np/nepali-calendar/" id="nclink" title="Nepali calendar" target="_blank">nepali calendar</a></div >--}}
        {{--</div>--}}
        <div style="width: 65%; float: right;">
            <div>
                <h1> {{trans('common.all_the_post')}}</h1>
                <table class="table table-striped table-hover hover " id="example">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>{{trans('common.title')}}</th>
                        <th>{{trans('common.body')}}</th>
                        <th>{{trans('common.created_at')}}</th>
                        <th>{{ trans('common.posted_by') }}</th>
                        <th>{{trans('common.action')}}</th>
                    </tr>
                    </thead>
                    <tbody>
                    @if(count($posts))
                        <?php $i = 1;?>
                        @foreach($posts as $k=>$post)
                            <tr>
                                <td class="trhover"
                                    onclick="location.href='{{ url('/show',[$post->id]) }}'"><?php echo $i++;?></td>
                                <td class="trhover"
                                    onclick="location.href='{{ url('/show',[$post->id]) }}'">{{ $post->title }}</td>
                                <td class="trhover"
                                    onclick="location.href='{{ url('/show',[$post->id]) }}'">{{ substr($post->body, 0, 50)}}{{ strlen($post->body)>50 ? "............" :"" }}</td>
                                <td>{{ date( 'M j, Y',strtotime($post->created_at)) }}</td>
                                <td class="text-danger"><strong>{{$post->name}}</strong></td>
                                <td>
                                    <a href="{{ url('/show',$post->id) }}" class="view btn btn-xs btn-info fa fa-eye"
                                       title="View Blog"></a>
                                </td>
                            </tr>
                        @endforeach
                    @else
                        <tr>
                            No Records Found
                        </tr>
                    @endif
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    {{--<script src="//nepalipatro.com.np/widget/js"></script>--}}
    <script src="/js/main.js"></script>
    <script src="/js/datatable.js"></script>
    <script src="/js/dataTables.bootstrap4.min.js"></script>
    <script>
        $(document).ready(function () {
            $('#example').DataTable();
        });
    </script>
@endsection
