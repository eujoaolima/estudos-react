// Importando os componentes para a página App

import { createRoot } from "react-dom/client";
import Titulo from "./components/Titulo";
import SubTitulo from "./components/SubTitulo";
import Mensagem from "./components/Mensagem";
import Postagem from "./components/Postagem";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import "./styles.css";


const rootElement = document.getElementById("root");

const root = createRoot(rootElement);

root.render("Hello World!");

let nome = "Batata";

// JSX = Mescla do HTML com Javascript

root.render( // Se não colocar uma tag section não é possível colocar várias informações dentro da função render
    <section>
        <h1>Fireball</h1>

        <p>
            Isso aqui é um texto escrito em <br /> <b>JSX</b>
        </p>

        <p>
            Estou puxando variáveis com o React, o valor da variável é {nome.toUpperCase()};
        </p>
    </section>

); // Como a variável root foi chamada 2 vezes, o JSX lê a alteração mais atual

// Componentes

root.render(
    <div>
        <h1>Exercício de Fixação</h1>
        <Blog />
        <Footer />
    </div>
);
