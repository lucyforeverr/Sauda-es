async function enviarNome() {

    const nome =
        document.getElementById("nome").value;

    const resposta =
        await fetch("/saudacao", {

        method: "POST",

        headers: {
            "Content-Type":
                "application/json"
        },

        body: JSON.stringify({
            nome: nome
        })

    });

    const dados =
        await resposta.json();

    localStorage.setItem(
        "saudacao",
        dados.saudacao
    );

    window.location.href =
        "saudacao.html";
}