import { useEffect, useState } from "react";


export default function ConversorMedidas () {
    const [metros, setMetros] = useState(0);
    const [centimetros, setCentimetros] = useState(0);
    const [milimetros, setMilimetros] = useState(0);
    const [kilometros, setKilometros] = useState(0);

    useEffect(() => {
        // Quando a tempC for alterada esta função será executada imediatamente

        const resultadoConversao = Number(metros) * 1000;
        setMilimetros(resultadoConversao);

    }, [metros]);

    useEffect(() => {
        const conversaoKilometros = Number(metros) / 1000;
        setKilometros(conversaoKilometros);
    }, [metros]);

    useEffect(() => {
        const conversaoCentimetros = Number(metros) * 100;
        setCentimetros(conversaoCentimetros);
    }, [metros]);

    
    
    return (
        <div>
            <input
                type="number"
                placeholder="Digite um número"
                onChange={(e) => {
                    setMetros(e.target.value);
                }}
            />
            <p>Valor em km: {kilometros} km</p>
            <p>Valor em m: {metros} m</p>
            <p>Valor em cm: {centimetros} cm</p>
            <p>Valor em mm: {milimetros} mm</p>

        </div>
    )
}