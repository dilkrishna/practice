@extends('admin.layout.backend')
@section('content')
    <div class="block">
        <div class="block-title">
            <h2>Edit Testimonial</h2>
        </div>

        @include('common.message')

        <form action="" method="post" class="form-horizontal form-bordered" enctype="multipart/form-data">
            {{csrf_field()}}
            <div class="form-group ">
                <label class="col-xs-2 control-label" for="name">Name</label>
                <div class="col-xs-6">
                    <input type="text" id="name" name="name" class="form-control" placeholder="Enter Your Name" value="{{ $query['name'] }} ">
                </div>
            </div>

            <div class="form-group ">
                <label class="col-xs-2 control-label" for="designation">Designation</label>
                <div class="col-xs-6">
                    <input type="text" id="designation" name="designation" class="form-control" placeholder="Your Designation" value="{{ $query['designation'] }}">
                </div>
            </div>

            <div class="form-group ">
                <label class="col-xs-2 control-label" for="description">Description</label>
                <div class="col-xs-6">
                    <textarea id="description" name="description" class="form-control" placeholder="Your Description" value="{{ $query['description'] }}">{{ $query['description'] }}</textarea>
                </div>
            </div>

            <div class="form-group ">
                <label class="col-xs-2 control-label" for="facebook_url">Facebook Address</label>
                <div class="col-xs-6">
                    <input type="text" id="facebook_url" name="facebook_url" class="form-control"  value="{{ $query['facebook_url'] }}">
                </div>
            </div>

            <div class="form-group ">
                <label class="col-xs-2 control-label" for="twitter_url">Twitter Address</label>
                <div class="col-xs-6">
                    <input type="text" id="twitter_url" name="twitter_url" class="form-control"  value="{{ $query['twitter_url'] }}">
                </div>
            </div>

            <div class="form-group ">
                <label class="col-xs-2 control-label" for="google_url">Google Address</label>
                <div class="col-xs-6">
                    <input type="text" id="google_url" name="google_url" class="form-control"  value="{{ $query['google_url'] }}">
                </div>
            </div>
            <div class="form-group ">
                <label class="col-xs-2 control-label" for="linkedin_url">Linkedin Address </label>
                <div class="col-xs-6">
                    <input type="text" id="linkedin_url" name="linkedin_url" class="form-control"  value="{{ $query['linkedin_url'] }}">
                </div>
            </div>

            <div class="form-group">
                <label class="col-xs-2 control-label" for="image">Image</label>

                <div class="col-xs-6">
                    <input type="file" id="image" name="image">
                    @if (!empty($query['image']))
                        <img id="preview" src="{{url('/uploads/team/' . $query['image'])}} "
                             alt="Select image" height="150" width="150"/>
                    @endif
                </div>
            </div>

            <div class="form-group form-actions">
                <div class="col-xs-2"></div>
                <div class="col-xs-4">
                    <button type="submit" class="btn btn-effect-ripple btn-primary">Submit</button>
                </div>
            </div>
        </form>
    </div>
    @include('common.image_add')
@endsection
