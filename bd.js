class BancoDeDados{
    constructor(){
        this.alunos = [];
        this.professores = [];
    }
    getAlunos(){
        return this.alunos;
    }
    addAlunos(alunos){
        this.alunos.push(aluno);
    }
    getAlunosPorId(id){

    }
    getProfessores(){
        return this.professores;
    }
    add(professores){
        this.professores.push(professores);
    }
}
module.exports = new BancoDeDados();