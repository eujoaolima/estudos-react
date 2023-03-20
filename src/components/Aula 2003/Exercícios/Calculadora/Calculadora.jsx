import { useEffect, useState } from "react"

export default function CalculadoraPorcentagem () {

    const [num, setNum] = useState(0);
    const [porcentagem, setPorcentagem] = useState(0);

    useEffect(() => {
        const converterNumero = Number(num) * 100;
        setPorcentagem(converterNumero);
    }, [num]);

    return (
        <>
        <h1>Calculadora de Porcentagem</h1>

        <input 
            type="text"
            placeholder="Digite um número de 0 a 1"
            onChange={(e) => setNum(e.target.value)}
        />
        <p>O número <strong>{num}</strong>, convertido para porcentagem, é <strong>{porcentagem} %</strong></p>
        </>
    )
}   