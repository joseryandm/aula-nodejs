const express = require('express');
const bodyParser = require('body-parser');
const bd = require('./bd');

const app = express();
app.use(bodyParser());

app.get('/',(req, res) =>{
    res.send('<h1>App Online</>');
});
app.get('/alunos',(req, res) =>{
    res.json(bd.get());
});
app.post('/alunos',(req, res) =>{
    bd.add(req.body);
    res.send('Aluno adicionado com sucesso!');
});
app.get('/professores',(req, res) =>{
    res.json(bd.get());
});
app.post('/professores',(req, res) =>{
    bd.add(req.body);
    res.send('Professor adicionado com sucesso!');
});
app.listen(3000, () => console.log('Servidor online na porta 3000.'));