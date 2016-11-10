@extends('admin.layout.backend')

@section('content')
    <div class="block full">
        <div class="block-title">
            <h2>Page Table</h2>
        </div>

        @include('common.message')
        <div class="table-responsive">
            <table id="example-datatable" class="table table-bordered table-vcenter">
                <thead>
                <tr>
                    <th style="width:100px;text-align:center;">Serial No</th>
                    <th>Menu Title</th>
                    <th>Page Title</th>
                    <th>Parent</th>
                    <th>Status</th>
                    <th style="width: 125px;text-align: center;"><i class="fa fa-flash"></i></th>
                </tr>
                </thead>
                <tbody>

                {{--@foreach ($query as $k=>$row)--}}
                    {{--<div>--}}
                        {{--<tr id="{{$row['id']}}">--}}
                            {{--<td class="text-center">{{ $k + 1 }}</td>--}}
                            {{--<td><strong>{{ $row['menu_title'] }}</strong></td>--}}
                            {{--<td><strong>{{ $row['page_title'] }}</strong></td>--}}
                            {{----}}
                            {{--<td>{{(!empty($parent) ? $parent['menu_title'] : '')}}</td>--}}
                            {{--@if ($row['status'] == 1)--}}
                                {{--<td class="hidden-sm hidden-xs text-center"><a href="javascript:void(0)"--}}
                                                                               {{--class="label label-success">Enabled</a>--}}
                                {{--</td>--}}
                            {{--@else--}}
                                {{--<td class="hidden-sm hidden-xs text-center"><a href="javascript:void(0)"--}}
                                                                               {{--class="label label-danger">Disabled</a>--}}
                                {{--</td>--}}
                            {{--@endif--}}

                            {{--<td class="text-center">--}}
                                {{--<a href="#modal-fade" data-toggle="modal" title="view"--}}
                                   {{--class="btn btn-effect-ripple btn-xs btn-info view-modal"--}}
                                   {{--data-menu_title="{{ $row['menu_title'] }}"--}}
                                   {{--data-page_title="{{ $row['page_title'] }}"--}}
                                   {{--data-page_info="{{ $row['page_info'] }}" data-content="{{ $row['content'] }}"--}}
                                   {{--data-status="{{ $row['status'] }}"><i class="fa fa-eye"></i></a>--}}

                                {{--<a href="{{URL::to('/admin/page/edit/'.$row['id'])}}" data-toggle="tooltip"--}}
                                   {{--title="edit" class="btn btn-effect-ripple btn-xs btn-success"><i--}}
                                            {{--class="fa fa-pencil"></i></a>--}}
                                {{--<a href="#" data-href="{{URL::to('/admin/page/delete/'.$row['id'])}}"--}}
                                   {{--data-toggle="modal" title="delete" data-target="#confirm-delete"--}}
                                   {{--data-menu_title="{{ $row['menu_title'] }}"--}}
                                   {{--class="btn btn-effect-ripple btn-xs btn-danger del-row"><i--}}
                                            {{--class="fa fa-times"></i></a>--}}
                            {{--</td>--}}
                        {{--</tr>--}}
                    {{--</div>--}}
                {{--@endforeach--}}
                </tbody>
            </table>
        </div>
    </div>

    <div id="modal-fade" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h3 class="modal-title"><strong>Page Details</strong></h3>
                </div>
                <div class="modal-body">
                    <div class="box span3">
                        <div class="box-content">
                            <table class="table table-bordered">
                                <tbody>
                                <tr>
                                    <td>Menu Title</td>
                                    <td id="menu_title"></td>
                                </tr>
                                <tr>
                                    <td>Page Title</td>
                                    <td id="page_title"></td>
                                </tr>
                                <tr>
                                    <td>Page Info</td>
                                    <td id="page_info"></td>
                                </tr>
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
                var page_title = $(this).attr('data-page_title');
                var menu_title = $(this).attr('data-menu_title');
                var page_info = $(this).attr('data-page_info');
                var content = $(this).attr('data-content');
                $('td#menu_title').html(menu_title);
                $('td#page_title').html(page_title);
                $('td#page_info').html(page_info);
                $('td#content').html(content);

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
                        url: '{{URL::to('/admin/updateOrder/pages')}}',
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
                var name = $(this).attr('data-menu_title');
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
