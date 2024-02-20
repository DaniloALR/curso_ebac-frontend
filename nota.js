const alunos = [];
class Alunos {
    situacao = '';
    constructor(nomeDoAluno,notaDoAluno){
        this.nome = nomeDoAluno;
        this.nota = notaDoAluno;
    }
    
    analiseDeSituacao(){
        if(this.nota >= 6){
            this.situacao = 'Aprovado';
            return `O aluno ${this.nome} foi aprovado com uma nota maior que 6`;
        } else {
            this.situacao = 'Reprovado';
            return `O aluno ${this.nome} foi reprovado com uma nota menor que 6`;
        }
    }
}

const aluno1 = new Alunos('João', 7);
const aluno2 = new Alunos('Maria', 8);
const aluno3 = new Alunos('Pedro', 5);
const aluno4 = new Alunos('Lucas', 10);

aluno1.analiseDeSituacao();
aluno2.analiseDeSituacao();
aluno3.analiseDeSituacao();
aluno4.analiseDeSituacao();

alunos.push(aluno1,aluno2,aluno3,aluno4);

function alunosComNotaMaiorQueSeis(){
    alunos.filter((aluno) => {
        if(aluno.situacao == "Aprovado"){
            console.log(`${aluno.nome} - Aprovado`)
        }
    })
    
}

alunosComNotaMaiorQueSeis();


