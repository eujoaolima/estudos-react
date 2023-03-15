/*

- Crie um array de alunos (nome, data de nascimento, nota, telefone);
- Crie um componente que renderiza cada aluno em cards (ListaAlunos);
    - Os alunos com média acima ou igual a 7 tem card com borda verde;
    - Os alunos com média abaixo de 7 tem card com borda vermelha;
    - Mostrar a média APENAS se o aluno tiver a nota maior ou igual a 7;
    - Mostrar uma mensagem motivacional se o aluno tiver nota abaixo de 7;

- Crie um componente que recebe uma prop numero, e mostra se é par ou ímpar;

*/

import "./exercicios.css"

const alunos = [
    {
        numero: "001",
        nome: "João",
        dataNascimento: "08/04/2002",
        nota: 10,
        telefone: "(14) 99778-5641"
    },

    {
        numero: "002",
        nome: "Pedro",
        dataNascimento: "04/08/2002",
        nota: 5,
        telefone: "(14) 94002-8922"
    },

    {
        numero: "003",
        nome: "Guilherme",
        dataNascimento: "27/12/2004",
        nota: 8,
        telefone: "(14) 92342-8332"
    },

    {
        numero: "004",
        nome: "Augusto",
        dataNascimento: "08/04/2002",
        nota: 4,
        telefone: "(11) 94002-8922"
    },
];

export default function ListaAlunos () {
    const mediaAlunos = alunos.map((aluno, index) => {
        let media = null;
        let cardClass = "";

        if (aluno.nota >= 7) {
            media = <p>Parabéns, você foi aprovado!</p>
            cardClass = "Aprovado";
        } else {
            media = <p>Reprovado, mais sorte da próxima vez</p>
            cardClass = "Reprovado";
        }

        return (
                <div className={`card ${cardClass}`} style={{ borderColor: aluno.nota >= 7 ? "green" : "red" }} key={index}>
                <ul>
                    <li>Nome: {aluno.nome}</li>
                    {aluno.nota >= 7 && <li>Nota: {aluno.nota}</li>}
                </ul>
                {aluno.nota >= 7 && media}
                {aluno.nota < 7 && media}
                </div>
        );
    });

    return <div>
                {mediaAlunos}
            </div>;
}
