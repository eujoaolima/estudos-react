import ListaCompras from "./components/Aula 1503/ListaCompras/ListaCompras";
import ListaFuncionarios from "./components/Aula 1503/ListaFuncionários/ListaFuncionarios";
import NavBar from "./components/Aula 1503/NavBar/NavBar";
import ListaAlunos from "./components/Aula 1503/Exercícios/exercícios";
import Numero from "./components/Aula 1503/Exercícios/exercicio2";

import Quadrado from "./components/Aula 1603/Quadrado/Quadrado";
import Contador from "./components/Aula 1603/Contador/Contador";
import Cadastro from "./components/Aula 1603/Cadastro/cadastro";
import ListFruits from "./components/Aula 1603/ListaFrutas/ListFruits";
import Sorteio from "./components/Aula 1703/Sorteio/Sorteio";
import Abas from "./components/Aula 1703/Abas/Abas";
import Quiz from "./components/Aula 1703/QuestãoQuiz/QuestaoQuiz";

import Calculadora from "./components/Aula 1703/Desafios/Desafio1";
import Caroussel from "./components/Aula 1703/Desafios/Desafio2";
import Desafio3 from "./components/Aula 1703/Desafios/Desafio3";
import ConveterTemperatura from "./components/Aula 2003/ConversorDeTemperatura/ConversorTemp";
import ConversorMedidas from "./components/Aula 2003/Exercícios/ConversorDeUnidadeDeMedida/ConversorMedidas";
import Dicionario from "./components/Aula 2003/Dicionario/Dicionario";
import CalculadoraPorcentagem from "./components/Aula 2003/Exercícios/Calculadora/Calculadora";


export default function App () {
    return (
        <>

            {/* <NavBar logado={true} nomeUsuario={"João Lima"} /> */}
            {/* <NavBar logado={false} /> */}

            {/* <ListaAlunos /> */}
            {/* <Numero numero={6} /> */}

            {/* <ListaCompras /> */}
            {/* <ListaFuncionarios /> */}

            {/* <Quadrado /> */}
            {/* <Contador />
            <Cadastro /> */}

            {/* <Sorteio /> */}
            {/* <ListFruits /> */}

            {/* <Abas /> */}
            {/* <Quiz /> */}
            
            {/* Desafios */}
            <Calculadora />
            <hr />
            {/* <Caroussel />
            <hr />
            <Desafio3 />
            <hr /> */}

            {/* <ConveterTemperatura />

            <hr />

            <ConversorMedidas />

            <hr />

            <Dicionario /> */}

            <CalculadoraPorcentagem />
        </>
    );
}