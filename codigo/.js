var botao = document.getElementById('meuBotao');

botao.addEventListener('mouseover', function() {
  botao.style.width = '150px';
  botao.style.height = '50px';
});

botao.addEventListener('mouseout', function() {
  botao.style.width = '';
  botao.style.height = '';
});

