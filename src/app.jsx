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

            <Sorteio />
            {/* <ListFruits /> */}
        </>
    );
}