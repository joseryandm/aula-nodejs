class BancoDeDados{
    constructor(){
        this.alunos = [];
        this.professores = [];
    }
    get(){
        return this.alunos;
    }
    add(alunos){
        this.alunos.push(aluno);
    }
    get(){
        return this.professores;
    }
    add(professores){
        this.alunos.push(professores);
    }
}
module.exports = new BancoDeDados();