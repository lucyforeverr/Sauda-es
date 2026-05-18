const express = require("express");

const app = express();

const porta = 3000;

app.use(express.json());

app.use(express.static("public"));

app.post("/saudacao", (req, res) => {

    const nome = req.body.nome;

    const mensagem =
        `Olá, ${nome}! Saudações! Seja bem-vindo ao outro lado da força!`;

    res.json({
        saudacao: mensagem
    });

});

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});