{{--@include('common.template_start')--}}
        <!-- Login Header -->
<div id="login-container">
    <h1 class="h2 text-light text-center push-top-bottom animation-slideDown">
        <img src="{{URL::to('/assets/logo/logo.png')}}"/><strong></strong>
    </h1>
    <!-- END Login Header -->

    <!-- Login Block -->
    <div class="block animation-fadeInQuickInv">
        <!-- Login Title -->
        <div class="block-title">
            <h2>Administrator Panel Login</h2>
        </div>
        <!-- END Login Title -->


                <!-- Login Form -->
        <form class="form-horizontal" role="form" method="POST" action="{{ url('/admin/login') }}">
            {{ csrf_field() }}
            <div class="form-group">
                <div class="col-xs-12">
                    <input type="text" id="email" name="email" class="form-control" placeholder="Your email..">
                </div>
            </div>
            <div class="form-group">
                <div class="col-xs-12">
                    <input type="password" id="password" name="password" class="form-control"
                           placeholder="Your password..">
                </div>
            </div>
            <div class="form-group form-actions">
                <div class="col-xs-8"></div>
                <div class="col-xs-4 text-right">
                    <button type="submit" class="btn btn-effect-ripple btn-sm btn-primary"><i class="fa fa-check"></i>
                        Let's
                        Go
                    </button>
                </div>
            </div>
        </form>
        <!-- END Login Form -->
    </div>
    <!-- END Login Block -->
</div>
<!-- END Login Container -->


        <!-- Load and execute javascript code used only in this page -->
<script src="{{URL::to('/assets/admin/js/pages/readyLogin.js')}}"></script>
<script>$(function () {
        ReadyLogin.init();
    });</script>



