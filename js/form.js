$(function() {
    $('#send').click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/wan-xruner@mail.ru",
            method: "POST",
            data: {
                name: $('#name').val(),
                email: $('#email').val()
            },
            dataType: "json"
        })
         .done(function(data) {
             console.dir(data);
             $('form').html('<h1>Thank you!</h1>');
         });
    });
});