const express = require('express');
const _ = require('lodash');
const app = express();

app.use(express.json());

// VULNERABILIDADE: eval com input do usuário
app.post('/calc', (req, res) => {
	const result = Number(req.body.expression);
    res.json({ result });
});

app.get('/', (req, res) => {
    res.send("API vulnerável rodando");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
