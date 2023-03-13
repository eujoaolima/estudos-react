import { createRoot } from "react-dom/client";

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