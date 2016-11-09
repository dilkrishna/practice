@extends('admin.layout.backend')
@section('content')
    <div class="block">
        <div class="block-title">
            <h2>Edit Services</h2>
        </div>

        @include('common.message')

        <form action="" method="post" class="form-horizontal form-bordered" enctype="multipart/form-data">
            {{csrf_field()}}
            <div class="form-group">
                <label class="col-md-2 control-label" for="title">Title</label>

                <div class="col-md-6">
                    <input type="text" id="menu_title" name="title" class="form-control"
                           value="{{ $query['title'] }}">
                </div>
            </div>

            <div class="form-group">
                <label class="col-md-2 control-label" for="image">Image</label>

                <div class="col-md-6">
                    <input type="file" id="image" name="image" class="form-control">
                    @if (!empty($query['image']))
                        <img id="preview" src="{{url('/uploads/services/' . $query['image'])}} "
                             alt="Select image" height="150" width="150"/>
                    @endif
                </div>
            </div>

            <div class="form-group">
                <label class="col-md-2 control-label" for="description">Description</label>

                <div class="col-md-10">
                    <textarea id="description" name="description"
                              class="ckeditor">{{ $query['description'] }}</textarea>
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