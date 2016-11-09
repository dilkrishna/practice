@extends('admin.layout.backend')
@section('content')
    <div class="block full">
        <div class="block-title">
            <h2>About</h2>
        </div>

        @include('common.message')
        <div class="table-responsive">
            <table id="example-datatable" class="table table-bordered table-vcenter">
                <thead>
                <tr>
                    <th style="width:100px;">Serial No</th>
                    <th style="text-align: center;">Content</th>
                    <th style="width: 125px;" class="text-center"><i class="fa fa-flash"></i></th>
                </tr>
                </thead>
                <tbody>

                    <div>
                        <tr>
                            <td class="text-center">{{1}}</td>
                            <td>{!! substr($query['content'], 0, 200) ." ..." !!}</td>

                            <td class="text-center">
                                <a href="#modal-fade" data-toggle="modal" title="view"
                                   class="btn btn-effect-ripple btn-xs btn-info view-modal"
                                   data-content="{!! $query['content'] !!}"><i class="fa fa-eye"></i></a>

                                <a href="{{URL::to('/admin/about/add')}}" data-toggle="tooltip"
                                   title="edit" class="btn btn-effect-ripple btn-xs btn-success"><i
                                            class="fa fa-pencil"></i></a>
                                <a href="#" data-href="{{URL::to('/admin/about/delete/'.$query['id'])}}"
                                   data-toggle="modal" title="delete" data-target="#confirm-delete"
                                   data-menu_title="About Us"
                                   class="btn btn-effect-ripple btn-xs btn-danger del-row"><i class="fa fa-times"></i></a>
                            </td>
                        </tr>
                    </div>
                </tbody>
            </table>
        </div>
    </div>

    <div id="modal-fade" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h3 class="modal-title"><strong>About</strong></h3>
                </div>
                <div class="modal-body">
                    <div class="box span3">
                        <div class="box-content">
                            <table class="table table-bordered">
                                <tbody>
                                <tr>
                                    <td>Content</td>
                                    <td id="content"></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-effect-ripple btn-danger" data-dismiss="modal">Close</button>
                </div>
            </div>
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
            $('a.view-modal').click(function (e) {
                var content = $(this).attr('data-content');
                $('td#content').html(content);

            })
        });

        $(function () {
            $('a.del-row').click(function (e) {
                var name = $(this).attr('data-menu_title');
                $('span#del_name').html(name);
            });
        });

        $('#confirm-delete').on('show.bs.modal', function (e) {
            $(this).find('.btn-danger').attr('href', $(e.relatedTarget).data('href'));
        });
    </script>


@endsection




