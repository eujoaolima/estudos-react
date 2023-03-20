// 2) Crie um componente Carrossel que possui dados que serão os itens (array) do carrosel (objeto com imagem e titulo). Deve haver os botões de avançar e voltar pelos itens do carrossel.

import { useState } from "react";
import "./desafio2.css";
import { slides } from "../Desafios/data/index";

export default function Desafio2() {
  const [indexAtual, setIndexAtual] = useState(0);

  function avancar() {
    // Cheguei no limite do array
    if (indexAtual === slides.length - 1) {
      setIndexAtual(0); // volto p/ o início
    } else {
      setIndexAtual(indexAtual + 1);
    }
  }

  function voltar() {
    // Já estou no primeiro
    if (indexAtual === 0) {
      // vou p/ o ultimo
      setIndexAtual(slides.length - 1);
    } else {
      setIndexAtual(indexAtual - 1);
    }
  }

  return (
    <div className="carrossel">
      <img src={slides[indexAtual].imagem} />
      <p>{slides[indexAtual].titulo}</p>
      <div className="controles">
        <button onClick={voltar}>{`<`}</button>
        <button onClick={avancar}>{`>`}</button>
      </div>
    </div>
  );
}