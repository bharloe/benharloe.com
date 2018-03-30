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
            data: data
        });

        $('#contactHeader').text('Thanks for the message! I will be in touch via email soon.')
        $('#contactForm').fadeTo( "slow" , 0.3, function() {});
        $('#contactFormSection').hide('slow', function() {});
    });
});