
    // Função para salvar os dados do formulário no localStorage
    function salvarDadosFormulario() {
      var nome = document.getElementsByName("name")[0].value;
      var email = document.getElementsByName("email")[0].value;
      var senha = document.getElementsByName("password")[0].value;
      var dataNascimento = document.getElementsByName("dob")[0].value;

      var dadosFormulario = {
        nome: nome,
        email: email,
        senha: senha,
        dataNascimento: dataNascimento
      };

      localStorage.setItem("dadosFormulario", JSON.stringify(dadosFormulario));

      alert("Cadastro realizado com sucesso!");
    }

    // Verificar se há dados salvos no localStorage ao carregar a página
    window.addEventListener("DOMContentLoaded", function() {
      var dadosFormularioSalvos = localStorage.getItem("dadosFormulario");

      if (dadosFormularioSalvos) {
        var dadosFormulario = JSON.parse(dadosFormularioSalvos);

        document.getElementsByName("name")[0].value = dadosFormulario.nome;
        document.getElementsByName("email")[0].value = dadosFormulario.email;
        document.getElementsByName("password")[0].value = dadosFormulario.senha;
        document.getElementsByName("dob")[0].value = dadosFormulario.dataNascimento;
      }
    });
  