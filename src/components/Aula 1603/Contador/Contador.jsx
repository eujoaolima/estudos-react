import { useState } from "react";
import "./Contador.css";
export default function Contador() {
    //useState é uma função que cria um estado
    //Um estado é uma variável especial que sincroniza as mudanças da página
    //indice 0 => estado
    //indice 1 => função que muda o estado
    const array = useState(0); //a função useState retorna um array

    let numero = array[0]; // inicializa o numero com o estdo inicial
    let setNumero  = array[1]; // atualiza o numero


    // Crie as seguintes opções: +10, +100, *3, /2, -50, -5.

    function inc() {
        setNumero(numero + 1);
    }

    function dec() {
        setNumero(numero - 1);
    }

    function minusFive() {
        setNumero(numero - 5);
    }

    function minusFifty() {
        setNumero(numero - 50);
    }

    function plusTen() {
        setNumero(numero + 10);
    }

    function plusOneHundred() {
        setNumero(numero + 100);
    }

    function threeTimes () {
        setNumero(numero * 3);
    }

    function divideTwo () {
        setNumero(numero / 2);
    }

    return (
        <div>
            <h1>{numero}</h1>
            <button onClick={inc}>+1</button>
            <button onClick={dec}>-1</button>
            <button onClick={minusFive}>-5</button>
            <button onClick={minusFifty}>-50</button>
            <button onClick={plusTen}>+10</button>
            <button onClick={plusOneHundred}>+100</button>
            <button onClick={threeTimes}>* 3</button>
            <button onClick={divideTwo}> / 2</button>
        </div>
    );
}