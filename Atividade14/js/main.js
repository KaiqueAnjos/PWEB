function validarCampos() {
    // PEGANDO AS VARIÁVEIS
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var comentario = document.getElementById("comentario").value;

    // REGEX PARA O EMAIL
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // CAMPO NOME
  if (nome == "" || nome < 10) {
    alert("Preencha campo NOME corretamente! É preciso ter ao menos 10 caracteres");
    document.forms.atividade.elements.nome.focus();
    return false;
};
  // CAMPO EMAIL
if (email == "" || !re.test(email)) {
    alert("Preencha campo E-MAIL corretamente!");
    document.forms.atividade.elements.email.focus();
    return false;
}

  // CAMPO COMENTÁRIO
if (comentario == "" || comentario.length < 20) {
    alert("O campo comentário precisa ter pelo menos 20 caracteres");
    document.forms.atividade.elements.comentario.focus();
    return false;
}
}