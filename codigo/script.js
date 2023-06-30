function enviarFormulario(){
    var botao= document.getElementById("enviar");
    botao.textContent = "Enviado";
    botao.style.backgroundColor =  "black";
    botao.style.color =  "white";

    tel = document.getElementById("tel").value;
    document.getElementById("tel").value="";
    document.getElementById("tel").placeholder="Enviado";

    let text = '{ "telefones" : [' +
                    '{ "telefone":"' + tel + '" }] }'
                ;

    const telefone = JSON.parse(text);
    var usuario =  JSON.parse(localStorage.getItem('user'));
    

    if(usuario != null){
        usuario.telefones.push(telefone.telefones[0]);
        localStorage.setItem('user', JSON.stringify(usuario));
    }
    else{
        localStorage.setItem('user', JSON.stringify(telefone));                  
    }
    
    
    
     
}
var botao2= document.querySelector("#secundaria") 
function dark(){
    var botao1= document.querySelector("#primaria");
    var fundo= document.querySelector("body");
    botao1.style.backgroundColor =  "black";
    botao1.style.color =  "white";
    fundo.style.backgroundColor=" gray";
    botao2.style.backgroundColor="white";
    
}
function white(){
    var botao1= document.querySelector("#primaria");
    var fundo= document.querySelector("body");
    botao1.style.backgroundColor="white";
    botao1.style.color="black"
    fundo.style.backgroundColor="#ffff";
    botao2.style.backgroundColor="lightblue"

}
function minhaFuncao() {
    alert("Conta excluída");
  }
  var excluir = document.getElementById("excluir");
  excluir.addEventListener("click", minhaFuncao);

  function IniciarMock(){
    let texto = '{ "conta" : [' +
        '{ "email": "xyz@xyz.com" }] }'
    ;

    const conta = JSON.parse(texto);
    localStorage.setItem('conta', JSON.stringify(conta));
}

function exclui(){
localStorage.removeItem("conta");

}


    




  
  
  