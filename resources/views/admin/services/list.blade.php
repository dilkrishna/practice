@extends('admin.layout.backend')
@section('content')
    <div class="block full">
        <div class="block-title">
            <h2>Services Table</h2>
        </div>

        @include('common.message')
        <div class="table-responsive">
            <table id="example-datatable" class="table table-bordered table-vcenter">
                <thead>
                <tr>
                    <th style="width:30px;text-align:center;">S.N.</th>
                    <th>Title</th>
                    <th style="width: 125px;text-align: center;"><i class="fa fa-flash"></i></th>
                </tr>
                </thead>
                <tbody>

                @foreach ($query as $k=>$row)
                    <div>
                        <tr id="{{$row['id']}}">
                            <td class="text-center">{{ $k + 1 }}</td>
                            <td>{{ $row['title'] }}</td>

                            <td class="text-center">
                                <a href="#modal-fade" data-toggle="modal" title="view"
                                   class="btn btn-effect-ripple btn-xs btn-info view-modal"
                                   data-title="{{ $row['title'] }}"
                                   data-description="{!! $row['description'] !!} "><i class="fa fa-eye"></i></a>

                                <a href="{{URL::to('/admin/services/edit/'.$row['id'])}}" data-toggle="tooltip"
                                   title="edit" class="btn btn-effect-ripple btn-xs btn-success"><i
                                            class="fa fa-pencil"></i></a>
                                <a href="#" data-href="{{URL::to('/admin/services/delete/'.$row['id'])}}"
                                   data-toggle="modal" title="delete" data-target="#confirm-delete"
                                   data-title="{{ $row['title'] }}"
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

    <div id="modal-fade" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h3 class="modal-title"><strong>Services Details</strong></h3>
                </div>
                <div class="modal-body">
                    <div class="box span3">
                        <div class="box-content">
                            <table class="table table-bordered">
                                <tbody>
                                <tr>
                                    <td>Title</td>
                                    <td id="title"></td>
                                </tr>
                                <tr>
                                    <td>Description</td>
                                    <td id="description"></td>
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
                var title = $(this).attr('data-title');
                var description = $(this).attr('data-description');
                $('td#title').html(title);
                $('td#description').html(description);
            })
        });

        $(function () {
            var fixHelper = function (e, ui) {
                ui.children().each(function () {
                    $(this).width($(this).width());
                });
                return ui;
            };

            $("#example-datatable tbody").sortable({

                update: function (event, ui) {
                    var order = $(this).sortable("serialize");
                    console.log(order);
                },
                helper: fixHelper,
                stop: function (e, ui) {
                    var sort = [];
                    for (var i = 0; i < $('tbody.ui-sortable tr').length; i++) {
                        var sel = $('tbody.ui-sortable tr')[i];
                        sort.push({
                            id: $(sel).attr('id'),
                            position: i
                        });
                    }
                    $.ajax({
                        url: '{{URL::to('/admin/updateOrder/services')}}',
                        type: 'POST',
                        data: JSON.stringify(sort),
                        dataType: 'JSON',
                        success: function (data) {
                            console.log(data);
                        },
                        error: function (data) {

                        }
                    });
                }
            }).disableSelection();

        });

        $(function () {
            $('a.del-row').click(function (e) {
                var name = $(this).attr('data-title');
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




