document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        let formValido = true;

        const nome = document.querySelector("#nome").value.trim();
        const email = document.querySelector("#email").value.trim();
        const senha1 = document.querySelector("#senha1").value.trim();
        const senha2 = document.querySelector("#senha2").value.trim();
        const escolaridade = document.querySelector("#escolaridade").value.trim();

        let labelNome = document.querySelector("#label-nome");
        let labelEmail = document.querySelector("#label-email");
        let labelEscolaridade = document.querySelector("#label-escolaridade");
        let labelSenha1 = document.querySelector("#label-senha1");
        let labelSenha2 = document.querySelector("#label-senha2");

        if (nome === "") {
            labelNome.innerHTML = "Campo vazio";
            formValido = false;
        } else if (/\d/.test(nome)) {
            labelNome.innerHTML = "O nome não pode conter números";
            formValido = false;
        } else {
            labelNome.innerHTML = "";
        }

        if (!email.includes("@") || !email.includes(".")) {
            labelEmail.innerHTML = "Email inválido";
            formValido = false;
        } else {
            labelEmail.innerHTML = "";
        }
        if(/\d/.test(escolaridade)){
            labelEscolaridade.innerHTML = "Escolha uma opção";
        }

        if (escolaridade === "") {
            labelEscolaridade.innerHTML = "Escolha uma opção";
            formValido = false;
        } else {
            labelEscolaridade.innerHTML = "";
        }

        if (senha1.length < 6) {
            labelSenha1.innerHTML = "A senha deve ter pelo menos 6 caracteres";
            formValido = false;
        } else {
            labelSenha1.innerHTML = "";
        }

        if (senha1 !== senha2) {
            labelSenha2.innerHTML = "As senhas não coincidem";
            formValido = false;
        } else {
            labelSenha2.innerHTML = "";
        }

        if (formValido) {
            console.log("Enviando formulário...");
            form.submit();
        }
    });
});
