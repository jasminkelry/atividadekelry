//efeito de esconder formulário de cadastro
$(document).ready(function(){
  
    $("#botão-cadastrar").click(function(){
    
    
       $("#form-cadastrar").slidetoggle("slow");
        $("#section-login").show("slow");
        $("#botao-cadastrar").hide();


})
});


