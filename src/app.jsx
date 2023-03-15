import ListaCompras from "./components/Aula 1503/ListaCompras/ListaCompras";
import ListaFuncionarios from "./components/Aula 1503/ListaFuncionários/ListaFuncionarios";
import NavBar from "./components/Aula 1503/NavBar/NavBar";
import ListaAlunos from "./components/Aula 1503/Exercícios/exercícios";
import Numero from "./components/Aula 1503/Exercícios/exercicio2";

export default function App () {
    return (
        <>

            {/* <NavBar logado={true} nomeUsuario={"João Lima"} /> */}
            {/* <NavBar logado={false} /> */}

            <ListaAlunos />
            <Numero numero={6} />

            {/* <ListaCompras /> */}
            {/* <ListaFuncionarios /> */}
        </>
    );
}