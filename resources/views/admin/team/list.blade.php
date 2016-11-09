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
                    <th>Name</th>
                    <th>Designation</th>
                    <th style="width: 125px;text-align: center;"><i class="fa fa-flash"></i></th>
                </tr>
                </thead>
                <tbody>

                @foreach ($query as $k=>$row)
                    <div>
                        <tr id="{{$row['id']}}">
                            <td class="text-center">{{ $k + 1 }}</td>
                            <td>{{ $row['name'] }}</td>
                            <td>{{ $row['designation'] }}</td>
                            <td class="text-center">

                                <a href="#modal-fade" data-toggle="modal" title="view"
                                   class="btn btn-effect-ripple btn-xs btn-info view-modal"
                                   data-name="{{ $row['name'] }}"
                                   data-designation="{{ $row['designation'] }}"
                                   data-description="{{ $row['description'] }}"
                                   data-facebook_url="{{ $row['facebook_url'] }}"
                                   data-twitter_url="{{ $row['twitter_url'] }}"
                                   data-google_url="{{ $row['google_url'] }}"
                                   data-linkedin_url="{{ $row['linkedin_url'] }}"><i class="fa fa-eye"></i></a>

                                <a href="{{URL::to('/admin/team/edit/'.$row['id'])}}" data-toggle="tooltip"
                                   title="edit" class="btn btn-effect-ripple btn-xs btn-success"><i
                                            class="fa fa-pencil"></i></a>
                                <a href="#" data-href="{{URL::to('/admin/team/delete/'.$row['id'])}}"
                                   data-toggle="modal" title="delete" data-target="#confirm-delete"
                                   data-name="{{ $row['name']}}"
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
    {{--view modal--}}
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
                                    <td>Name</td>
                                    <td id="name"></td>
                                </tr>
                                <tr>
                                    <td>Designation</td>
                                    <td id="designation"></td>
                                </tr>
                                <tr>
                                    <td>Description</td>
                                    <td id="description" class="text-justify"></td>
                                </tr>
                                <tr>
                                    <td>Facebook Address</td>
                                    <td id="facebook_url"></td>
                                </tr>
                                <tr>
                                    <td>Twitter Address</td>
                                    <td id="twitter_url"></td>
                                </tr>
                                <tr>
                                    <td>Google Address</td>
                                    <td id="google_url"></td>
                                </tr>
                                <tr>
                                    <td>Linkedin Address</td>
                                    <td id="linkedin_url"></td>
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
    {{--Delete section--}}
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

        $(function () {
            $('a.view-modal').click(function (e) {
                var name = $(this).attr('data-name');
                var designation = $(this).attr('data-designation');
                var description = $(this).attr('data-description');
                var facebook_url = $(this).attr('data-facebook_url');
                var twitter_url = $(this).attr('data-twitter_url');
                var google_url = $(this).attr('data-google_url');
                var linkedin_url = $(this).attr('data-linkedin_url');
                $('td#name').html(name);
                $('td#designation').html(designation);
                $('td#description').html(description);
                $('td#facebook_url').html(facebook_url);
                $('td#twitter_url').html(twitter_url);
                $('td#google_url').html(google_url);
                $('td#linkedin_url').html(linkedin_url);

            })
        });
    </script>

@endsection




