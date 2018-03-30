$(document).ready(function () {
    
    $("#contactSubmit").click(function () {
        event.preventDefault();

        var data = {
            name: $('#name').val(),
            email: $('#email').val(),
            category: $("#category").val(),
            message: $("#message").val()
        }
        

        $.ajax({
            method: "POST",
            url: "https://5ee76gb3pb.execute-api.us-east-1.amazonaws.com/dev/",
            data: data,
            success: function (response) {
                console.log("test");
            }
        });
    });
});