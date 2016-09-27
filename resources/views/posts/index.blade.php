@extends('layouts.app')
@section('content')
    <div class="container">
        <div class="col-lg-12">
            <h1> All the posts</h1>
            <input type="button" class="btn btn-primary btn-h1-margin pull-right create" value="Create" />
        </div>
    <!-- Modal create -->
    <div id="create" class="modal fade" role="dialog">
        <div class="modal-dialog modal-lg" style="width:677px;" >
            <!-- Modal content-->
            <div class="modal-content" >
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <div class="alert alert-danger show-div" style="display:none">
                            {{--<button aria-hidden="true" data-dismiss="alert" class="close" type="button">&chi;</button>--}}
                            <ul class="list list-group">
                                <p id="errors"></p>
                            </ul>
                        </div>
                    <form  action="" method="post" class="form form-horizontal">
                        <div class="form-group">
                            <label for="title" class="col-lg-2 control-label">Title</label>
                            <div class="col-lg-3">
                                {{--{{ Form::text($title, $value = null, $attributes = array('class'=>set_value())) }}--}}
                                {{ Form::text('title')}}
                            </div>
                        </div>
                        <br>
                        <div class="form-group">
                            <label for="title" class="col-lg-2 control-label">body</label>
                            <div class="col-lg-3">
                                {{ Form::textarea('body')}}
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="title" class="col-lg-2 control-label"></label>
                            <div class="col-lg-3">
                                {{ Form::submit('Create', array('class'=>'btn btn-primary btn-sm'))}}
                                {{ Form::reset('Reset',array('class'=>'btn btn-primary btn-sm')) }}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal delete -->
    <div id="confirm-delete" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-sm">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title"><span id="del_name"></span></h4>
                </div>
                <div class="modal-body">
                    Are you sure you want to delete this record?
                </div>
                <div class="modal-footer">

                    <a class="btn btn-effect-ripple btn-danger">Delete</a>
                    <button type="button" data-dismiss="modal" class="btn btn-effect-ripple btn-default">Cancel
                    </button>

                </div>
            </div>
        </div>
    </div>
    <!-- Modal edit -->
    <div id="edit" class="modal fade" role="dialog">
        <div class="modal-dialog modal-lg" style="width:677px;" >
            <!-- Modal content-->
            <div class="modal-content" >
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <div class="alert alert-danger show-div" style="display:none">
                        <ul class="list list-group">
                            <p id="errors1"></p>
                        </ul>
                    </div>
                    <div class="panel-body">
                        <form  action="" class="update form-horizontal" >
                            <div class="form-group">
                                <input type="hidden" class="form-control" name="id" id="id"/>
                                <label>Title</label>
                                {{Form::text('title',null,array('id'=>'title', 'class' => 'form-control'))}}
                            </div>
                            <div class="form-group">
                                <label>Body</label>
                                {{Form::textarea('body',null,array('id'=>'body', 'class' => 'form-control '))}}
                            </div>
                                {{ Form::submit('update', array('class'=>'btn btn-primary btn-sm'))}}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <!--  modal view-->
    <div id="view" class="modal fade" role="dialog">
        <div class="modal-dialog modal-lg" style="width:677px;" >
            <!-- Modal content-->
            <div class="modal-content" >
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <div class="panel-body">
                        <div>
                            <h2>Title :</h2>
                            <h2 id="title_text"></h2>
                        </div>
                        <div>
                            <h2>Body:</h2>
                            <p id="body_text"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-lg-12 " id="mydiv" >
        <table class="table table-striped table-hover hover ">
            <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Body</th>
                <th>Created At</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            @if(count($posts))
                <?php $i = 1; ?>
                @foreach($posts as $k=>$post)
                    <tr>
                        <td class="trhover" onclick="location.href='{{ route('post.show',[$post->id]) }}'" ><?php echo $i++ ; ?></td>
                        <td class="trhover" onclick="location.href='{{ route('post.show',[$post->id]) }}'" >{{ $post->title }}</td>
                        <td class="trhover" onclick="location.href='{{ route('post.show',[$post->id]) }}'" >{{ substr($post->body, 0, 50)}}{{ strlen($post->body)>50 ? "............" :"" }}</td>
                        <td>{{ date( 'M j Y, A:h',strtotime($post->created_at)) }}</td>
                        <td>
                            <a href="javascript:void(0);" class="view btn btn-xs btn-inverse fa fa-eye" id="<?php echo $post['id']; ?>" title="View Blog" ></a>
                            <a href="javascript:void(0);" class=" edit btn btn-xs btn-inverse fa fa-edit" id="<?php echo $post['id']; ?>" title="Edit Blog"></a>
                            <a href="javascript:void(0);" class=" del-row btn btn-xs btn-danger fa fa-times" id="<?php echo $post['id']; ?>" title="Delete Blog"></a>
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
@endsection
