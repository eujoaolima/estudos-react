// 1) Montar uma calculadora de IMC (campo peso e campo altura), mostrar o resultado do cálculo abaixo dos campos ao clicar em calcular.

import { useEffect, useState } from "react";
import "./desafio1.css";

export default function Calculadora() {
    const [imc, setImc] = useState("");
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");

    // FORMULA IMC = peso / altura²

    useEffect(() => {
        const resultadoIMC = Number(peso) / Number(altura) ** 2;
        setImc(resultadoIMC.toFixed(2));
    }, [peso, altura]);
    
    return (
        <>
            <div>
                <input type="text" placeholder="Digite seu peso (Kg)" onChange={(e) => {setPeso(e.target.value)}}></input>
                <input type="text" placeholder="Digite sua altura" onChange={(e) => {setAltura(e.target.value)}}></input>
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

/*

Forma do professor Almir:

import { useEffect, useState } from "react";
import "./Desafio1.css";


export function Desafio1() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  // -1 indica que não houve calculo
  const [imc, setImc] = useState(-1);


  useEffect(() => {
    const resultado = peso / (altura * altura);
    setImc(resultado);
  }, [peso, altura]);


  // function calcularImc() {
  //   const resultado = peso / (altura * altura);
  //   setImc(resultado);
  // }


  function limpar() {
    setPeso(0);
    setAltura(0);
    setImc(-1);
  }


  return (
    <div>
      <h3>Calculadora de IMC</h3>
      <input
        type="number"
        placeholder="Digite o peso"
        onChange={(evento) => setPeso(evento.target.value)}
        value={peso}
      />
      <input
        type="number"
        placeholder="Digite a altura"
        onChange={(evento) => setAltura(evento.target.value)}
        value={altura}
      />
      <br />
      // <button onClick={calcularImc}>Calcular</button>
      <button onClick={limpar}>Limpar</button>
      <hr />
      {(imc !== Infinity && !isNaN(imc)) && <p>O seu IMC é: {imc.toFixed(2)}</p>}
    </div>
  );
}

// Capturando dados do input


// - onChange
// - Função para coletar o valor
// - Estado pra armazenar

*/