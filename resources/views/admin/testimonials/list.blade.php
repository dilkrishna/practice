@extends('admin.layout.backend')
@section('content')
    <div class="block full">
        <div class="block-title">
            <h2>Testimonials Table</h2>
        </div>

        @include('common.message')
        <div class="table-responsive">
            <table id="example-datatable" class="table table-bordered table-vcenter">
                <thead>
                <tr>
                    <th style="width:100px;text-align:center;">Serial No</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Country</th>
                    <th>Description</th>
                    <th style="width: 125px;text-align: center;"><i class="fa fa-flash"></i></th>
                </tr>
                </thead>
                <tbody>

                @foreach ($query as $k=>$row)
                    <div>
                        <tr id="{{$row['id']}}">
                            <td class="text-center">{{ $k + 1 }}</td>
                            <td><strong>{{ $row['first_name'] }}</strong></td>
                            <td><strong>{{ $row['last_name'] }}</strong></td>
                            <td>{{$row['country']}}</td>
                            <td>{{$row['description']}}</td>


                            <td class="text-center">

                                <a href="{{URL::to('/admin/testimonials/edit/'.$row['id'])}}" data-toggle="tooltip"
                                   title="edit" class="btn btn-effect-ripple btn-xs btn-success"><i
                                            class="fa fa-pencil"></i></a>
                                <a href="#" data-href="{{URL::to('/admin/testimonials/delete/'.$row['id'])}}"
                                   data-toggle="modal" title="delete" data-target="#confirm-delete"
                                   data-name="{{ $row['first_name']." ". $row['last_name'] }}"
                                   class="btn btn-effect-ripple btn-xs btn-danger del-row"><i
                                            class="fa fa-times"></i></a>
                            </td>
                        </tr>
                    </div>
                @endforeach
                </tbody>
            </table>
        </div>
    </div>

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

    <script type="text/javascript">
        $(function () {
            $('a.del-row').click(function (e) {
                var name = $(this).attr('data-name');
                $('span#del_name').html(name);
            });
        });

        $('#confirm-delete').on('show.bs.modal', function (e) {
            $(this).find('.btn-danger').attr('href', $(e.relatedTarget).data('href'));
        });
    </script>

    <script src="{{URL::to('/assets/admin/js/pages/uiTables.js')}}"></script>
    <script>$(function () {
            UiTables.init();
        });</script>

@endsection




