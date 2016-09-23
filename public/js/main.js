$(document).ready(function () {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf_token"]').attr('content')
        }
    });

    $(".create").click(function(){
        $('#create').modal('show');
    });


    $('.form').on('submit', function(e) {
        e.preventDefault();
        var data = $(this).serialize();
        $.ajax({
            type: "POST",
            url: '/post',
            data: data,
            dataType: "JSON",
            success: function(res) {
                if(res.status == 200 && res.success == true) {
                    swal({
                        title: 'Success!',
                        text: res.message,
                        type: 'success'
                    }, function (data) {
                        $('#create').modal('hide');
                    });
                }
            },
            error: function(err) {
                swal('Failed!', res.message, 'error');
            }
        });
    });

    // $( ".form" ).submit(function(event) {
    //     event.preventDefault();
    
    //     var data = $(this).serialize();
    
    //     $.ajax({
    //         type: "POST",
    //         url: '/post',
    //         data: data ,
    
    //         success: function (data) {
    //             $("#create").modal('hide');
    //             $("#mydiv").load(location.href + " #mydiv");
    //             $(".form")[0].reset();
    //         },
    //         error: function(xhr, status, error) {
    //             var data = xhr.responseText;
    //             var jsonResponse = JSON.parse(data);
    
    //             var msg = [];
    //             $.each(jsonResponse, function(index, value) {
    //                 msg.push('<li>' + value + '</li>');
    //             });
    //             $(".show-div").show();
    //             $("#errors").html(msg);
    //         },
    //     });
    // });
});
