document.addEventListener("DOMContentLoaded", function() {
  var loginForm = document.querySelector("form");

  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var emailInput = document.getElementById("login-form").value;
    var passwordInput = document.getElementById("password").value;

    if (validateEmail(emailInput) && validatePassword(passwordInput)) {
      // Lógica de login bem-sucedido
      alert("Login realizado com sucesso!");
      window.location.href = "TelaPrincipal.html"; // Redirecionar para a página de sucesso após o login
    } else {
      // Lógica de login inválido
      alert("Email ou senha inválidos. Por favor, tente novamente.");
    }
  });

  function validateEmail(email) {
    var emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    return emailRegex.test(email);
  }

  function validatePassword(password) {
    return password.length >= 6;
  }

  // Recupera os dados do localStorage e preenche os campos do formulário
  if (localStorage.getItem("dadosFormulario")) {
    var dadosFormulario = JSON.parse(localStorage.getItem("dadosFormulario"));

    document.getElementById("login-form").value = dadosFormulario.email;
    document.getElementById("password").value = dadosFormulario.senha;
  }
});
