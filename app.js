const express = require('express');
const bodyParser = require('body-parser');
const bd = require('./bd');

const app = express();
app.use(bodyParser.json());

app.get('/',(req, res) =>{
    res.send('<h1>App Online!</>');
});

app.get('/alunos',(req, res) =>{
    res.json(bd.getAlunos());
});

app.get('/alunos/:id',(req, res) =>{
    const idAluno = req.params.id;
    res.json(bd.getAlunoPorId());
});

app.post('/alunos',(req, res) =>{
    bd.addAluno(req.body);
    res.send('Aluno adicionado com sucesso!');
});

app.get('/professores',(req, res) =>{
    res.json(bd.getProfessores());
});

app.listen(3000, () => console.log('Servidor online na porta 3000.'));