

// Importando os componentes para a página App

import { createRoot } from "react-dom/client";
import Titulo from "./components/Aula 1303/Título/Titulo";
import SubTitulo from "./components/Aula 1303/Subtítulo/SubTitulo";
import Mensagem from "./components/Aula 1303/Mensagem/Mensagem";
import Postagem from "./components/Aula 1303/Postagem/Postagem";
import Blog from "./components/Aula 1303/Blog/Blog";
import Footer from "./components/Aula 1303/Footer/Footer";

import ListMusic from "./components/Aula 1403/ListMusic/ListMusic.jsx";
import Musics from "./components/Aula 1403/Musics/Music";
import Task from "./components/Aula 1403/Tasks/Tasks.jsx";

import ProductList from "./components/Aula 1403/Exercício/ProductList";
import App from "./app";

// Importações CSS
import "./CSS/styles.css";


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

root.render( /*
    <div>
        <h1>Exercício de Fixação</h1>
        <Blog />
        <Musics />
        <Task title="Lavar louça" status="Pendente" deadline="14/03/2023"/>
        <Task title="Comer" status="Pendente" deadline="14/03/2023"/>
        <Task title="Dormir" status="Pendente" deadline="14/03/2023"/>
        <Task title="Jogar mine" status="Pendente" deadline="17/03/2023"/>
        <Task title="Correr" status="Pendente" deadline="31/03/2023"/>
        <Footer />
    </div>
*/

// Exercício - Profº Gabriel

/*
    <div>
        <ProductList />
    </div>
*/

/*
        <div>
        {/* <Titulo></Titulo>
        <Mensagem></Mensagem>
        <hr />
        <Postagem></Postagem>
        <hr />
        <Blog></Blog>
        <hr/>
        <Footer></Footer> } */

        
/*
        <Titulo corBorda="#FF0000" corFundo="#FF000022">Musicas</Titulo>
        <ListMusic />
    
        <Titulo corBorda="#00FF00" corFundo="#00FF0022">Tarefas</Titulo>
        <Task title="Beber água" status="Feito" deadline="14/03/2023 12:00" />
        <Task title="Marcar reunião" status="Pendente" deadline="31/03/2023 10:00" />
        <Task title="Correr" status="Atrasado" deadline="02/03/2023 6:00" />
    
        <Titulo>
            React é uma biblioteca para criação de interfaces visuais web.
        </Titulo>
        </div>
    
*/ 
        <App />
);

