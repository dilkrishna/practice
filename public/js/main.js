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
                    text: "success",   
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
            var name = $(this).attr('data-menu_title');
            $('span#del_name').html(name);
        });
    });

    $('#confirm-delete').on('show.bs.modal', function (e) {
        $(this).find('.btn-danger').attr('href', $(e.relatedTarget).data('href'));
    });
});
