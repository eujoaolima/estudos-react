import { useState } from "react";
import "./quiz.css";

const pergunta = {
    enunciado: "Qual é a capital de Brunei?",
    alternativas: ["Fortaleza", "Bandar Seri Begawan", "Jakarta", "Kuala Lumpur"],
    alternativaCorreta: "Bandar Seri Begawan",
};

export default function Quiz() {
    const [statusQuiz, setStatusQuiz] = useState("pendente");
    // pendente = precisa marcar uma alternativa
    // acertou = marcou a alternativa correta
    // errou = marcou a alternativa errada

    const [tentativas, setTentativas] = useState(2);

    function checarResposta(altMarcada) {
        if (tentativas === 0) {
            setStatusQuiz("esgotou");
            return;
        }

        if (altMarcada === pergunta.alternativaCorreta) {
            setStatusQuiz("acertou");
        } else {
            setStatusQuiz("errou");
            setTentativas(tentativas - 1);
        }
    }

    function tentarNovamente() {
        // voltar para pendente, indica para a interface atualizar
        // e mostrar a pergunta novamente
        setStatusQuiz("pendente");
    }

    if (statusQuiz === "esgotou") {
        return (
            <>
                <p>Você esgotou suas chances ;-; </p>
            </>
        )
    }

    // Colocar lá embaixo um if (tentativas == 0) retornando uma página com um parágrafo "Você já esgotou todas as suas chances"

    if (statusQuiz === "pendente") {
        return (
        <div>
            <h3>{pergunta.enunciado}</h3>
            <ol type="A">
            {pergunta.alternativas.map((alt) => (
                <li className="alternativa" onClick={() => checarResposta(alt)}>
                {alt}
                </li>
            ))}
            </ol>
        </div>
        );
    } else if (statusQuiz === "acertou") {
        return (
        <div>
            <h3>Parabéns, você acertou!</h3>
            <p>Mostrou que manja!</p>
        </div>
        );
    } else if (statusQuiz === "errou") {
        return (
        <div>
            <h3>Você errou. Mas pode tentar novamente.</h3>
            <button onClick={tentarNovamente}>Tentar novamente</button>
        </div>
        );
    }
}