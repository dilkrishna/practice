@extends('admin.layout.backend')
@section('content')
    <div class="block">
        <div class="block-title">
            <h2>Services</h2>
        </div>

        @include('common.message')

        <form action="" method="post" class="form-horizontal form-bordered" enctype="multipart/form-data">
            {{csrf_field()}}
            <div class="form-group">
                <label class="col-md-2 control-label" for="title">Title</label>

                <div class="col-md-6">
                    <input type="text" id="title" name="title" class="form-control" placeholder="Enter service title"
                           value="{{ old('title') }}">
                </div>
            </div>

            <div class="form-group">
                <label class="col-md-2 control-label" for="image">Image</label>

                <div class="col-md-6">
                    <input type="file" id="image" name="image" class="form-control">
                    <img id="preview" src="" alt="Select image" height="150" width="150" style="display:none"/>
                </div>
            </div>

            <div class="form-group">
                <label class="col-md-2 control-label" for="description">Description</label>

                <div class="col-md-10">
                <textarea id="description" name="description" class="ckeditor"
                        >{{ old('description') }}</textarea>
                </div>
            </div>


            <div class="form-group form-actions">
                <div class="col-md-2"></div>
                <div class="col-md-4">
                    <button type="submit" class="btn btn-effect-ripple btn-primary">Submit</button>
                </div>
            </div>
        </form>
    </div>

    <script src="{{URL::to('/assets/admin/js/plugins/ckeditor/ckeditor.js')}}"></script>


    @include('common.image_add')

@endsection
