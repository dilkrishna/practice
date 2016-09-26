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
        $(".edit").click(function(){
            $('#edit').modal('show');
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

});
