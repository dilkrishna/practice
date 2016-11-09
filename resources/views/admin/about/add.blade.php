@extends('admin.layout.backend')
@section('content')

    <div class="block full">
        <div class="block-title">
            <h2>About Us</h2>
        </div>

        @include('common.message')

        <form action="" method="post" class="form-horizontal form-bordered">
            {{csrf_field()}}

            <input type="hidden" name="id" value="{{(!empty($query) ? $query['id'] : 0)}}">

            <div class="form-group">
                <label class="col-md-2 control-label" for="content">Description</label>

                <div class="col-md-9">
                <textarea id="content" name="content" class="ckeditor form-control">{{(!empty($query) ? $query['content'] : '')}}</textarea>
                </div>
            </div>

            <div class="form-group form-actions">
                <div class="col-md-9 col-md-offset-3">
                    <button type="submit" class="btn btn-effect-ripple btn-primary" name="submit"><i
                                class="fa fa-check"></i> Submit
                    </button>
                </div>
            </div>
        </form>
    </div>

    <script src="{{URL::to('/resources/assets/admin/js/plugins/ckeditor/ckeditor.js')}}"></script>
@endsection

