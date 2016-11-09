@extends('admin.layout.backend')
@section('content')
    <div class="block full">
        <div class="block-title">
            <h2>Administrators</h2>
        </div>

        @include('common.message')
        <div class="table-responsive">
            <table id="example-datatable" class="table table-bordered table-vcenter">
                <thead>
                <tr>
                    <th class="text-center" style="width: 100px;">Serial No</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th class="text-center">Login Authorized</th>
                    <th class="text-center" style="width: 125px;"><i class="fa fa-flash"></i></th>
                </tr>
                </thead>
                <tbody>

                @foreach ($query as $k=>$row)
                    <div class="sortable">
                        <tr id="<?php echo $row['id'];?>">
                            <td class="text-center"><?php echo $k + 1;?></td>
                            <td><?php echo $row['first_name'];?></td>
                            <td><?php echo $row['last_name'];?></td>
                            <td><?php echo $row['email'];?></td>
                            <td class="text-center">@if($row['type'] == 1)
                                    <img src="{{URL::to('/assets/admin/img/tick.png')}}"/> YES
                                @else
                                    <img src="{{URL::to('/assets/admin/img/cross.png')}}"/> NO
                                @endif
                            </td>

                            <td class="text-center">
                                <a href="{{URL::to('/admin/administrators/edit/'.$row['id'])}}" data-toggle="tooltip" title="edit"
                                   class="btn btn-effect-ripple btn-xs btn-success"><i class="fa fa-pencil"></i></a>

                                <a href="#" data-href="{{URL::to('/admin/administrators/delete/'.$row['id'])}}" data-toggle="modal"
                                   data-name="<?php echo $row['name'];?>" title="delete"
                                   data-target="#confirm-delete"
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


@endsection




