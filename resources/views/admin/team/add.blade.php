@extends('admin.layout.backend')
@section('content')
    <div class="block">
        <div class="block-title">
            <h2>Add Testimonial</h2>
        </div>

        @include('common.message')

        <form action="" method="post" class="form-horizontal form-bordered" enctype="multipart/form-data">
            {{csrf_field()}}
            <div class="form-group ">
                <label class="col-xs-2 control-label" for="name">Name</label>
                <div class="col-xs-6">
                    <input type="text" id="name" name="name" class="form-control" placeholder="Enter Your Name" value="{{ old('name') }}">
                </div>
            </div>

            <div class="form-group ">
                <label class="col-xs-2 control-label" for="designation">Designation</label>
                <div class="col-xs-6">
                    <input type="text" id="designation" name="designation" class="form-control" placeholder="Your Designation" value="{{ old('designation') }}">
                </div>
            </div>

            <div class="form-group">
                <label class="col-md-2 control-label" for="description">Description</label>

                <div class="col-md-10">
                <textarea id="description" name="description" class="ckeditor">{{ old('description') }}</textarea>
                </div>
            </div>

            <div class="form-group ">
                <label class="col-xs-2 control-label" for="facebook_url">Facebook Address</label>
                <div class="col-xs-6">
                    <input type="text" id="facebook_url" name="facebook_url" class="form-control"  value="{{ old('facebook_url') }}">
                </div>
            </div>

            <div class="form-group ">
                <label class="col-xs-2 control-label" for="twitter_url">Twitter Address</label>
                <div class="col-xs-6">
                    <input type="text" id="twitter_url" name="twitter_url" class="form-control"  value="{{ old('twitter_url') }}">
                </div>
            </div>

            <div class="form-group ">
                <label class="col-xs-2 control-label" for="google_url">Google Address</label>
                <div class="col-xs-6">
                    <input type="text" id="google_url" name="google_url" class="form-control"  value="{{ old('google_url') }}">
                </div>
            </div>
            <div class="form-group ">
                <label class="col-xs-2 control-label" for="linkedin_url">Linkedin Address </label>
                <div class="col-xs-6">
                    <input type="text" id="linkedin_url" name="linkedin_url" class="form-control"  value="{{ old('linkedin_url') }}">
                </div>
            </div>

            <div class="form-group ">
                <label class="col-xs-2 control-label" for="image">Upload Image</label>
                <div class="col-xs-6">
                    <input type="file" id="image" name="image">
                    <img id="preview" src="" alt="Select image" height="150" width="150" style="display:none"/>
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
    <script src="{{URL::to('/assets/admin/js/plugins/ckeditor/ckeditor.js')}}"></script>
    @include('common.image_add')
@endsection