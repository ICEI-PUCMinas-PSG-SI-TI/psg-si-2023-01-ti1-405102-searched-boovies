document.addEventListener("DOMContentLoaded", function() {
    var userData = localStorage.getItem("userData");
    var minhaConta = localStorage.getItem("minhaConta");
    var user = JSON.parse(userData);
    var contas = JSON.parse(minhaConta);
  
    if (user != null) {
      document.getElementById("name").innerHTML = user.name;
      document.getElementById("email").innerHTML = user.email;
      document.getElementById("password").innerHTML = user.password;
    }
  
    if (contas != null) {
      document.getElementById("email").innerHTML = contas.minhaConta[0].email;
      document.getElementById("regiao").innerHTML = contas.minhaConta[0].pais;
      document.getElementById("estado").innerHTML = contas.minhaConta[0].estado;
      document.getElementById("sexo").innerHTML = contas.minhaConta[0].sexo;
      document.getElementById("idade").innerHTML = contas.minhaConta[0].idade;
      document.getElementById("data-nascimento").innerHTML = contas.minhaConta[0].dataN;
      document.getElementById("sobre").innerHTML = contas.minhaConta[0].sobre;
      document.getElementById("nome").innerHTML = contas.minhaConta[0].nome;
      document.getElementById("numero").innerHTML = contas.minhaConta[0].numero;
      document.getElementById("ocupacao").innerHTML = contas.minhaConta[0].ocupacao;
    }
  });
  
  function enviarFormulario() {
    var botao = document.getElementById("enviar");
    botao.textContent = "Enviado";
    botao.style.backgroundColor = "black";
    botao.style.color = "white";
  
    var tel = document.getElementById("tel").value;
    document.getElementById("tel").value = "";
    document.getElementById("tel").placeholder = "Enviado";
  
    var text = '{ "telefones" : [' +
      '{ "telefone":"' + tel + '" }] }';
  
    var telefone = JSON.parse(text);
    var usuario = JSON.parse(localStorage.getItem('user'));
  
    if (usuario != null) {
      usuario.telefones.push(telefone.telefones[0]);
      localStorage.setItem('user', JSON.stringify(usuario));
    } else {
      localStorage.setItem('user', JSON.stringify(telefone));
    }
  }
  
  var botao2 = document.querySelector("#secundaria");
  
  function dark() {
    var botao1 = document.querySelector("#primaria");
    var fundo = document.querySelector("body");
    botao1.style.backgroundColor = "black";
    botao1.style.color = "white";
    fundo.style.backgroundColor = "gray";
    botao2.style.backgroundColor = "white";
  }
  
  function white() {
    var botao1 = document.querySelector("#primaria");
    var fundo = document.querySelector("body");
    botao1.style.backgroundColor = "white";
    botao1.style.color = "black";
    fundo.style.backgroundColor = "#ffff";
    botao2.style.backgroundColor = "lightblue";
  }
  
  function minhaFuncao() {
    alert("Conta excluída");
  }
  
  var excluir = document.getElementById("excluir");
  excluir.addEventListener("click", minhaFuncao);
  
  function IniciarMock() {
    var texto = '{ "conta" : [' +
      '{ "email": "xyz@xyz.com" }] }';
  
    var conta = JSON.parse(texto);
    localStorage.setItem('conta', JSON.stringify(conta));
  }
  
  function exclui() {
    localStorage.removeItem("conta");
  }
      