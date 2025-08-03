$(document).on("submit", "#frmLogin", function(e){
    e.preventDefault();
    var username = $("#txtUsername").val();
    var password = $("#txtPassword").val();
    var formData = {
        username: username,
        password: password
    }

    $.ajax({
        url: "http://127.0.0.1:8081/api/v1/authenticate/login",
        data: formData,
        method: "POST",
        contentType: 'application/json',
        data: JSON.stringify(formData),
        // headers: {
        //     'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        // },
        success: function(response){
            toastr.success('<h5>Notification</h5>'+response.message);
            setTimeout(function(){
                window.location.href = "/admin/dashboard";
            }, 1000);
        },
        error: function(response){
            toastr.error('<h5>Notification</h5>'+response.responseJSON.message);
        }
    });
});