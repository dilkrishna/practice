@extends('layouts.app')
@section('content')
    <div class="container">
        <div class="col-lg-12">
            <h1> All the posts</h1>
            <input type="button" class="btn btn-primary btn-h1-margin pull-right create" value="Create" />
        </div>
    <!-- Modal -->
    <div id="create" class="modal fade" role="dialog">
        <div class="modal-dialog modal-lg" style="width:677px;" >
            <!-- Modal content-->
            <div class="modal-content" >
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <div class="alert alert-danger show-div" style="display:none">
                            <button aria-hidden="true" data-dismiss="alert" class="close" type="button">&chi;</button>
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
    <div id="edit" class="modal fade" role="dialog">
        <div class="modal-dialog modal-lg" style="width:677px;" >
            <!-- Modal content-->
            <div class="modal-content" >
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <div class="panel-body none formData" id="editForm">
                        <h2>Edit User</h2>
                        <form class="form" id="form">
                            <div class="form-group">
                                <label>Name</label>
                                <input type="text" class="form-control" name="title" id="title"/>
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="text" class="form-control" name="body" id="body"/>
                            </div>
                            <input type="hidden" class="form-control" name="id" id="idEdit"/>
                            <a href="javascript:void(0);" class="btn btn-warning" onclick="$('#editForm').slideUp();">Cancel</a>
                            <a href="javascript:void(0);" class="btn btn-success" onclick="userAction('edit')">Update User</a>
                        </form>
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
                <!-- <?php $i = 0 ?> -->
                @foreach($posts as $k=>$post)
                    <!-- <?php $i++ ?> -->
                    <tr>
                        <td class="trhover" onclick="location.href='{{ route('post.show',[$post->id]) }}'" >{{ 1+$k }}</td>
                        <td class="trhover" onclick="location.href='{{ route('post.show',[$post->id]) }}'" >{{ $post->title }}</td>
                        <td class="trhover" onclick="location.href='{{ route('post.show',[$post->id]) }}'" >{{ substr($post->body, 0, 50)}}{{ strlen($post->body)>50 ? "............" :"" }}</td>
                        <td>{{ date( 'M j Y, A:h',strtotime($post->created_at)) }}</td>
                        <td>
                            <a href="{{ route('post.show',[$post->id]) }}" class=" btn btn-inverse glyphicon glyphicon-eye-open"></a>
                            <a href="javascript:void(0);" class="btn btn-inverse glyphicon glyphicon-edit" onclick="edit('<?php echo $post['id']; ?>')"></a>
                            {{--<input type="button" class=" edit btn btn-primary " value="Edit"/>--}}
                        </td>
                    </tr>
                @endforeach
                </tbody>
            </table>
            <div class="text-center">
              {{ $posts->links()}}
            </div>
        </div>
<script>
    function edit(id){
        $.ajax({
            type: 'GET',
            dataType:'JSON',
            url: '/post/{id}/edit',
            data: 'action_type=data&id='+id,
            success:function(data){
                console.log(data);
                $('#title').val(data.title);
                $('#body').val(data.body);
                $("#edit").modal('show');
            }
        });
    };
</script>
    </div>
@endsection
