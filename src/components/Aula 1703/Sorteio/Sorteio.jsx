import { useState } from "react";


export default function Sorteio () {

    const array = useState(0);

    let numero = array[0];
    let setNumero = array[1];
    let cardSorteio = "";

    function sorteio () {
       numero = setNumero(Math.floor(Math.random() * 100));
    }

    console.log("Componente reconstruiu " + new Date().toTimeString());

    return (
        <>
            <h1>Contador</h1>
            <div className={`card ${cardSorteio}`} style={{ color: numero % 2 === 0 ? "green" : "blue" }}>
                <h2>{numero}</h2>
                <button onClick={sorteio}>Gerar número</button>
            </div>
        </>
    );
}