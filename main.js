$(document).ready(function() {
    console.log('DOM carregado');
    console.log($.fn.validate);

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

    if (window.performance && window.performance.navigation.type === 1) {
        $('#modal').fadeOut();
    }

    $('#form').validate({
        submitHandler: function (form) {
            console.log('Form submetido');
            $('#modal').fadeIn(); 
        },
    });

    $('#closeModal').on('click', function () {
        console.log('Fechar modal');
        $('#modal').fadeOut(); 
    });

    const menuToggle = document.getElementById('menuToggle');
    const menuItems = document.getElementById('links');

    menuToggle.addEventListener('click', () => {    
    menuItems.style.display = menuItems.style.display === 'block' ? 'none' : 'block';
});
});