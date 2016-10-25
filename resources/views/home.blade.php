@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading"></div>
                    <div class="panel-body">
                        <h1> {{trans('common.all_the_post')}}</h1>
                    <table class="table table-striped table-hover hover " id="example">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>{{trans('common.title')}}</th>
                            <th>{{trans('common.body')}}</th>
                            <th>{{trans('common.created_at')}}</th>
                            <th>{{ trans('common.posted_by') }}</th>
                            <th>{{trans('common.action')}}</th>
                        </tr>
                        </thead>
                        <tbody>
                        @if(count($posts))
                            <?php $i = 1;?>
                            @foreach($posts as $k=>$post)
                                    <tr>
                                        <td class="trhover" onclick="location.href='{{ url('/show',[$post->id]) }}'" ><?php echo $i++;?></td>
                                        <td class="trhover" onclick="location.href='{{ url('/show',[$post->id]) }}'" >{{ $post->title }}</td>
                                        <td class="trhover" onclick="location.href='{{ url('/show',[$post->id]) }}'" >{{ substr($post->body, 0, 50)}}{{ strlen($post->body)>50 ? "............" :"" }}</td>
                                        <td>{{ date( 'M j, Y',strtotime($post->created_at)) }}</td>
                                        <td class="text-danger"><strong>{{$post->name}}</strong></td>
                                        <td>
                                            <a href="{{ url('/show',$post->id) }}" class="view btn btn-xs btn-info fa fa-eye" title="View Blog" ></a>
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
        </div>
    </div>
</div>
<script src="/js/main.js"></script>
<script src="/js/datatable.js"></script>
<script src="/js/dataTables.bootstrap4.min.js"></script>
<script>
    $(document).ready(function() {
        $('#example').DataTable();
    } );
</script>
@endsection
