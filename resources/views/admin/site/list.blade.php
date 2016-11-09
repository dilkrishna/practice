@extends('admin.layout.backend')
@section('content')

    <div class="block full">
        <div class="block-title">
            <h2>Site Details</h2>
        </div>

        @include('common.message')

        <div class="table-responsive">
            <table id="example-datatable" class="table table-bordered table-vcenter">
                <thead>
                <tr>
                    <th class="text-center" style="width: 100px;">Serial No</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Registration Number</th>
                    <th>Contact No</th>
                    <th class="text-center" style="width: 135px;"><i class="fa fa-flash"></i></th>
                </tr>
                </thead>
                <tbody>

                <tr>
                    <td class="text-center">{{1}}</td>
                    <td>{{$query['email']}} </td>
                    <td>
                        @if($query['street'] != ''){{'Street : '.$query['street']}}<br/>@endif
                        @if($query['postcode'] != ''){{'Post Code : '.$query['postcode']}}<br/>@endif
                        @if($query['city'] != ''){{'City : '.$query['city']}}<br/>@endif
                        @if($query['country'] != ''){{'Country : '.$query['country']}}@endif

                    </td>
                    <td>{{$query['registration_number']}} </td>
                    <td>{{$query['contact_no1']}}<br/>{{$query['contact_no2']}} <br/>{{$query['contact_no2']}} </td>
                    <td class="text-center">
                        <a href="#modal-fade" title="view"
                           class="btn btn-effect-ripple btn-xs btn-info view-modal" data-toggle="modal"
                           data-email="{{ $query['email']}}"
                           data-street="{{ $query['street']}}"
                           data-postcode="{{ $query['postcode']}}"
                           data-city="{{ $query['city']}}"
                           data-country="{{ $query['country']}}"
                           data-registrationNo="{{ $query['registration_number']}}"
                           data-contact_no1="{{ $query['contact_no1'] }}"
                           data-contact_no2="{{ $query['contact_no2'] }}"
                           data-contact_no3="{{ $query['contact_no3'] }}"
                           data-facebook_link="{{ $query['facebook_link'] }}"
                           data-twitter_link="{{ $query['twitter_link'] }}"
                           data-linkedIn_link="{{ $query['linkedIn_link'] }}"
                           data-footer_content="{{ $query['footer_content'] }}"
                           data-google_link="{{ $query['google_link'] }}">
                            <i class="fa fa-eye"></i>
                        </a>
                        <a href="{{URL::to('/admin/site/add')}}" data-toggle="tooltip"
                           title="edit_site" class="btn btn-effect-ripple btn-xs btn-success"><i
                                    class="fa fa-pencil"></i></a>

                        <a href="#" data-href="{{URL::to('/admin/site/delete/'.$query['id'])}}"
                           data-name="Site Details"
                           data-toggle="modal" title="delete_site" data-target="#confirm-delete"
                           class="btn btn-effect-ripple btn-xs btn-danger del-row"><i class="fa fa-times"></i>
                        </a>

                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>

    <div id="modal-fade" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h3 class="modal-title"><strong>Site Details</strong></h3>
                </div>
                <div class="modal-body">
                    <div class="box span3">
                        <div class="box-content">
                            <table class="table table-bordered">
                                <tbody>
                                <tr>
                                    <td>Email</td>
                                    <td id="email"></td>
                                </tr>
                                <tr>
                                    <td>Street</td>
                                    <td id="street"></td>
                                </tr>
                                <tr>
                                    <td>Post Code</td>
                                    <td id="postcode"></td>
                                </tr>
                                <tr>
                                    <td>City</td>
                                    <td id="city"></td>
                                </tr>
                                <tr>
                                    <td>Country</td>
                                    <td id="country"></td>
                                </tr>
                                <tr>
                                    <td>Contact no1</td>
                                    <td id="contact1"></td>
                                </tr>
                                <tr>
                                    <td>Contact no2</td>
                                    <td id="contact2"></td>
                                </tr>
                                <tr>
                                    <td>Contact no3</td>
                                    <td id="contact3"></td>
                                </tr>
                                <tr>
                                    <td>Registration Number</td>
                                    <td id="registrationNo"></td>
                                </tr>
                                <tr>
                                    <td>Facebook</td>
                                    <td id="fb_link"></td>
                                </tr>
                                <tr>
                                    <td>Twitter</td>
                                    <td id="twitter_link"></td>
                                </tr>
                                <tr>
                                    <td>Linked In</td>
                                    <td id="linkedIn_link"></td>
                                </tr>
                                <tr>
                                    <td>Google +</td>
                                    <td id="google_link"></td>
                                </tr>
                                <tr>
                                    <td>Footer Content</td>
                                    <td id="footer_content"></td>
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
                var email = $(this).attr('data-email');
                var street = $(this).attr('data-street');
                var postcode = $(this).attr('data-postcode');
                var city = $(this).attr('data-city');
                var country = $(this).attr('data-country');
                var contact1 = $(this).attr('data-contact_no1');
                var contact2 = $(this).attr('data-contact_no2');
                var contact3 = $(this).attr('data-contact_no3');
                var registrationNo = $(this).attr('data-registrationNo');
                var fb_link = $(this).attr('data-facebook_link');
                var twitter_link = $(this).attr('data-twitter_link');
                var linkedIn_link = $(this).attr('data-linkedIn_link');
                var google_link = $(this).attr('data-google_link');
                var footer_content = $(this).attr('data-footer_content');
                $('td#email').html(email);
                $('td#street').html(street);
                $('td#city').html(city);
                $('td#postcode').html(postcode);
                $('td#country').html(country);
                $('td#registrationNo').html(registrationNo);
                $('td#contact1').html(contact1);
                $('td#contact2').html(contact2);
                $('td#contact3').html(contact3);
                $('td#fb_link').html(fb_link);
                $('td#twitter_link').html(twitter_link);
                $('td#linkedIn_link').html(linkedIn_link);
                $('td#google_link').html(google_link);
                $('td#footer_content').html(footer_content);
            })
        });

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