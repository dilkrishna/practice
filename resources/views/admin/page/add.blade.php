@extends('admin.layout.backend')
@section('content')
    <div class="block">
        <div class="block-title">
            <h2>Page</h2>
        </div>

        @include('common.message')

        <form action="" method="post" class="form-horizontal form-bordered" enctype="multipart/form-data">
        {{csrf_field()}}
            <div class="form-group">
                <label class="col-xs-2 control-label" for="parent_id">Parent</label>

                <div class="col-xs-6">
                    <select id="parent_id" name="parent_id" class="form-control" size="1">
                        <option value="0" selected="selected">No Parent</option>
                        @foreach($parents as $p)
                            <option value="{{$p['id']}}">{{$p['menu_title']}}</option>
                        @endforeach
                    </select>
                </div>
            </div>

            <div class="form-group">
                <label class="col-xs-2 control-label" for="menu_title">Menu Title</label>

                <div class="col-xs-6">
                    <input type="text" id="menu_title" name="menu_title" class="form-control" placeholder="Enter menu title"
                           value="{{ old('menu_title') }}" >
                </div>
            </div>

            <div class="form-group">
                <label class="col-xs-2 control-label" for="url">URL</label>

                <div class="col-xs-6">
                    <input type="text" id="url" name="url" class="form-control" placeholder="Enter page url" >
                </div>
            </div>

            <div class="form-group">
                <label class="col-xs-2 control-label" for="page_title">Page Title</label>

                <div class="col-xs-6">
                    <input type="text" id="page_title" name="page_title" class="form-control" placeholder="Enter page title"
                           value="{{ old('page_title') }}" >
                </div>
            </div>

            <div class="form-group">
                <label class="col-xs-2 control-label" for="page_info">Page Info</label>

                <div class="col-xs-6">
                    <input type="text" id="page_info" name="page_info" class="form-control" placeholder="Enter page information"
                           value="{{ old('page_info') }}" >
                </div>
            </div>

            <div class="form-group">
                <label class="col-xs-2 control-label" for="header_image">Header Image</label>

                <div class="col-xs-6">
                    <input type="file" id="image" name="header_image" class="form-control">
                    <img id="preview" src="" alt="Select image" height="150" width="150" style="display:none"/>
                </div>
            </div>

            <div class="form-group">
                <label class="col-xs-2 control-label" for="show_link">Show Link</label>

                <div class="col-xs-6">
                    <label class="checkbox-inline" for="top_nav">
                        <input type="checkbox" id="top_nav" name="top_nav"
                               value="1" >Main Navigation
                    </label>
                    <label class="checkbox-inline" for="footer_nav">
                        <input type="checkbox" id="footer_nav" name="footer_nav"
                               value="1" >Footer Navigation
                    </label>
                </div>
            </div>

            <div class="form-group">
                <label class="col-xs-2 control-label" for="content">Content</label>

                <div class="col-xs-10">
                <textarea id="content" name="content" class="ckeditor"
                          >{{ old('content') }}</textarea>
                </div>
            </div>

            {{--<div class="form-group">--}}
                {{--<label class="col-xs-2 control-label" for="meta_keywords">Meta Keywords</label>--}}

                {{--<div class="col-xs-6">--}}
               {{--<textarea id="meta_keywords" name="meta_keywords" rows="3"--}}
                         {{--class="form-control">{{ old('meta_keywords') }}</textarea>--}}
                {{--</div>--}}
            {{--</div>--}}

            {{--<div class="form-group">--}}
                {{--<label class="col-xs-2 control-label" for="meta_description">Meta Description</label>--}}

                {{--<div class="col-xs-8">--}}
                {{--<textarea id="meta_description" name="meta_description" rows="3" class="form-control"--}}
                          {{--placeholder="Enter meta description">{{ old('meta_description') }}</textarea>--}}
                {{--</div>--}}
            {{--</div>--}}


            <div class="form-group">
                <label class="col-xs-2 control-label" for="status">Status</label>

                <div class="col-md-4">
                    <select id="status" name="status" class="form-control" size="1">
                        <option value="1" >Enable
                        </option>
                        <option value="0" >
                            Disable
                        </option>
                    </select>
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


    <script type="text/javascript">
        $(function () {
            $('#menu_title').keyup(function () {
                var title = $(this).val();
                if (title === '') {
                    return;
                }
//                $('#h1_title').val(title);

                title = title.toLowerCase();
                title = title.replace(/[^a-z0-9 ]+/g, '');
                title = title.replace('  ', ' ');

                var url = '/' + title.replace(/\s/g, '-');
                $('#url').val(url);
            });
        });
    </script>

    @include('common.image_add')


@endsection