@extends('admin.layout.backend')
@section('content')
    <div class="block">
        <div class="block-title">
            <h2>News</h2>
        </div>

        @include('common.message')

        <form action="" method="post" class="form-horizontal form-bordered" enctype="multipart/form-data">
            {{csrf_field()}}
            <div class="form-group">
                <label class="col-md-2 control-label" for="title">Title</label>

                <div class="col-md-6">
                    <input type="text" id="title" name="title" class="form-control" placeholder="Enter news title"
                           value="{{ old('title') }}" >
                </div>
            </div>

            <div class="form-group">
                <label class="col-md-2 control-label" for="description">Description</label>

                <div class="col-md-10">
                <textarea id="description" name="description" class="ckeditor"
                >{{ old('description') }}</textarea>
                </div>
            </div>

            <div class="form-group">
                <label class="col-md-2 control-label" for="seo_title">SEO Title</label>

                <div class="col-md-6">
                    <input type="text" id="seo_title" name="seo_title" class="form-control" placeholder="Enter SEO title"
                           value="{{ old('seo_title') }}" >
                </div>
            </div>

            <div class="form-group">
                <label class="col-md-2 control-label" for="seo_description">SEO Description</label>

                <div class="col-md-6">
                <textarea id="seo_description" name="seo_description" class="form-control" rows="5" placeholder="Enter SEO description">{{ old('seo_description') }}</textarea>
                </div>
            </div>

            <div class="form-group">
                <label class="col-md-2 control-label" for="date_published">Date Published</label>

                <div class="col-md-6">
                    <input  type="text" id="date_published" name="date_published"
                            class="form-control input-datepicker" data-date-format="yyyy-mm-dd" placeholder="Enter published date : yyyy-mm-dd"
                            value="{{ old('date_published') }}">
                </div>
            </div>

            <div class="form-group">
                <label class="col-md-2 control-label" for="header_image">Header Image</label>

                <div class="col-md-6">
                    <input type="file" id="image" name="header_image" class="form-control">
                    <img id="preview" src="" alt="Select image" height="150" width="150" style="display:none"/>
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
