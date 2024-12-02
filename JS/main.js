$(document).ready(function() {
    console.log(jQuery.fn.validate);
    $('#form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            assunto: {
                required: true
            },
            politic: {
                required: true
            }
        },
        errorPlacement: function(error, element) {
            return false
        },
        errorClass: 'error',
        highlight: function(element) {
            $(element).addClass('input-error');
        },
        unhighlight: function(element) {
            $(element).removeClass('input-error');
        }
    })
    

});