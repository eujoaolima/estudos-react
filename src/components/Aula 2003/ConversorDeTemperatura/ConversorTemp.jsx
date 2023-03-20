import { useEffect, useState } from "react";

export default function ConveterTemperatura () {
    const [tempC, setTempC] = useState(0);
    const [tempF, setTempF] = useState(0);
    const [tempK, setTempK] = useState(0);

    useEffect(() => {
        // Quando a tempC for alterada esta função será executada imediatamente

        const resultadoConversao = Number(tempC) * 1.8 + 32;
        setTempF(resultadoConversao);

    }, [tempC]);

    useEffect(() => {
        const conversaoKelvin = Number(tempC) + 273;
        setTempK(conversaoKelvin);
    }, [tempC]);

    return (
        <div>
            <input
                type="number"
                placeholder="Digite um número"
                onChange={(e) => {
                    setTempC(e.target.value);
                }}
            />

            <p>Valor em Fahrenheit: {tempF} F</p>
            <p>Valor em Celsius: {tempC} ºC</p>
            <p>Valor em Kelvin: {tempK} K</p>
        </div>
    )
}