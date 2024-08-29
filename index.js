document.getElementById('submitDiv').addEventListener('click', function() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (nome && email && senha) {
        alert(`Cadastro realizado!\nNome: ${nome}\nE-mail: ${email}`);
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
