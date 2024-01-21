$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({

        messages: {
            nome: {
                required: 'Campo obrigatório'
            },
            email: {
                required: 'Campo obrigatório',
                email: 'Formato de email inválido'
            },
            mensagem:{
                required: 'Campo obrigatório'
            }
        }
        
    });

    $('form').submit(function(e){
        e.preventDefault();

        if($('form').valid()){
            $('.sucesso').fadeIn(1000);
            $('.erro').fadeOut(300);

            $('form input').val('')
            $('form textarea').val('')
        } else{
            $('.erro').fadeIn(1000);
            $('.sucesso').fadeOut(300);
        }
    })
})