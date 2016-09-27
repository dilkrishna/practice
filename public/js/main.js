$(document).ready(function () {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf_token"]').attr('content')
        }
    });

    $(".create").click(function(){
        $('#create').modal('show');
    });


    $( ".form" ).submit(function(event) {
        event.preventDefault();

        var data = $(this).serialize();
    
        $.ajax({
            type: "POST",
            url: '/post',
            data: data ,
    
            success: function (data) {
                swal({
                    title: "success !",
                    text: "Data Created Sucessfully",
                    type: "success",
                    confirmButtonText: "Ok"
                },
                function(){
                    $("#create").modal('hide');
                    $("#mydiv").load(location.href + " #mydiv");
                    $(".form")[0].reset();
                }
            )},

            error: function(xhr, status, error) {
                swal({
                    title: "Error",
                    text: "You've Error ",
                    type: "error",
                    confirmButtonText: "OK",
                },function () {
                    var data = xhr.responseText;
                    var jsonResponse = JSON.parse(data);

                    var msg = [];
                    $.each(jsonResponse, function(index, value) {
                        msg.push('<li>' + value + '</li>');
                    });
                    $(".show-div").show();
                    $("#errors").html(msg);
                    $(".form")[0].reset();
                    }
                )},

        });

    });

    $(function () {
        $('a.del-row').click(function (e) {
            var id = $(this).attr('id');
            swal({
                title: "Wait!",
                text: "Are you sure to remove this data?",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, remove it!",
                cancelButtonText: "No, I don't want to!",
                closeOnConfirm: false,
                closeOnCancel: false
            }, function(isConfirm){
                if (isConfirm) {
                    $.ajax({
                        type: "DELETE",
                        url: '/post/'+id,
                        data: {id: id},
                        success: function() {
                            swal({
                                title: 'Success!',
                                text: 'success',
                                type: 'success'
                            }, function () {
                                location.reload();
                            });
                        }
                    });
                } else {
                    swal("Cancelled", "Your data is safe :)", "error");
                }
            });
        });
    });

    $(".edit").click(function () {
        var id = $(this).attr('id');
        $.ajax({
            type: 'GET',
            dataType: 'JSON',
            url: '/post/'+id +'/edit',
            data: {id: id},
            success: function (data) {
                $('#id').val(data.id);
                $('#title').val(data.title);
                $('#body').val(data.body);
                $('#edit').modal('show');
            }
        });
    });

    $('.update').submit(function(e) {
        e.preventDefault();

        var id = $('input[name="id"]').val();
        var data = $(this).serialize();

        $.ajax({
            type: "PUT",
            url: '/post/'+id,
            data: data,
            success: function() {
                swal({
                    title: 'Success!',
                    text:  'Blog updated successfully',
                    type: 'success'
                }, function () {
                    $('#edit').modal('hide');
                    $("#mydiv").load(location.href + " #mydiv");
                });
            },
            error: function(err) {
                swal('Failed!', 'Error', 'error');
            }
        });
    });
});
