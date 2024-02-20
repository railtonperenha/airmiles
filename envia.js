// Função para validar o formulário
function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var mensagem = document.getElementById("mensagem").value;

    // Verificar se o campo de nome está vazio
    if (nome.trim() === "") {
        alert("Por favor, preencha o campo Nome.");
        return false;
    }

    // Verificar se o campo de e-mail está vazio ou não é um e-mail válido
    if (email.trim() === "" || !validarEmail(email)) {
        alert("Por favor, insira um e-mail válido.");
        return false;
    }

    // Verificar se o campo de mensagem está vazio
    if (mensagem.trim() === "") {
        alert("Por favor, preencha o campo Mensagem.");
        return false;
    }

    // Se tudo estiver correto, permitir a submissão do formulário
    return true;
}

// Função para validar o formato do e-mail
function validarEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}