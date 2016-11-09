@extends('admin.layout.backend')
@section('content')
    <div class="block">
        <div class="block-title">
            <h2>Add Administrator</h2>
        </div>

        @include('common.message')

        <form action="" method="post" class="form-horizontal form-bordered">
            <input type="hidden" name="_token" value="<?php echo csrf_token(); ?>">

            <div class="form-group">
                <label class="col-md-3 control-label" for="first_name">First Name</label>

                <div class="col-md-6">
                    <input type="text" id="first_name" name="first_name" class="form-control"
                           placeholder="Enter first name"
                           value="{{ old('first_name') }}">

                </div>
            </div>

            <div class="form-group">
                <label class="col-md-3 control-label" for="last_name">Last Name</label>

                <div class="col-md-6">
                    <input type="text" id="last_name" name="last_name" class="form-control"
                           placeholder="Enter last name"
                           value="{{ old('last_name') }}">

                </div>
            </div>

            <div class="form-group">
                <label class="col-md-3 control-label" for="email">Email</label>

                <div class="col-md-6">
                    <input type="email" id="email" name="email" class="form-control"
                           placeholder="Enter email"
                           value="{{ old('email') }}">

                </div>
            </div>

            <div class="form-group">
                <label class="col-md-3 control-label" for="password">Password</label>

                <div class="col-md-6">
                    <input type="password" id="password" name="password" class="form-control"
                           placeholder="Enter password">

                </div>
            </div>

            <div class="form-group">
                <label class="col-md-3 control-label" for="password_confirmation">Confirm Password</label>

                <div class="col-md-6">
                    <input type="password" id="password_confirmation" name="password_confirmation"
                           class="form-control" placeholder="Retype password">

                </div>
            </div>

            <div class="form-group">
                <label class="col-md-3 control-label" for="type">Login Authority</label>

                <div class="col-md-6">
                    <label class="switch switch-info">
                        <input type="checkbox" name="type" id="type"><span></span>
                    </label>
                </div>
            </div>

            <div class="form-group form-actions">
                <div class="col-md-6 col-md-offset-3">
                    <button type="submit" class="btn btn-effect-ripple btn-primary" name="submit">Submit</button>
                </div>
            </div>
        </form>
    </div>
@endsection


