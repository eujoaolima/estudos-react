// 1) Montar uma calculadora de IMC (campo peso e campo altura), mostrar o resultado do cálculo abaixo dos campos ao clicar em calcular.

import { useState } from "react";
import "./desafio1.css";

export default function Calculadora() {
    const [imc, setImc] = useState("");
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");

    // FORMULA IMC = peso / altura²

    function obterPeso (e) {
        const input = e.target;
        const valor = input.value;
        setPeso(valor);
    }

    function obterAltura (e) {
        const input = e.target;
        const valor = input.value;
        setAltura(valor);
    }

    function calcImc () {
        const valor = peso / altura ** 2;
        setImc(valor.toFixed(2));
    }
    
    return (
        <>
            <div>
                <input type="text" placeholder="Digite sua altura" onChange={obterAltura}></input>
                <input type="text" placeholder="Digite seu peso (Kg)" onChange={obterPeso}></input>
                <br />
                <button onClick={calcImc}>Calcular</button>
                <br />
                <strong>Seu peso é: {peso} kg</strong>
                <br />
                <strong>Sua altura é: {altura}m</strong>
                <br />
                <strong>Seu IMC é: {imc}</strong>
            </div>
        </>
    );
}