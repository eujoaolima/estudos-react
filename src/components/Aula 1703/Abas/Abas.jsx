import { useState } from "react";
import "./abas.css";

export default function Abas() {
    const [aba, setAba] = useState("Home");

    function abaHome () {
        setAba("Home");
    }

    function abaPerfil () {
        setAba("Perfil");
    }

    function abaAjuda () {
        setAba("Ajuda");
    }
        
    return (
        <>
            <h1>Hello World!</h1>
            <button onClick={abaHome}>Home</button>
            <button onClick={abaPerfil}>Perfil</button>
            <button onClick={abaAjuda}>Ajuda</button>

            {/* Forma alternativa:
            
            <button onClick={() => setAba("home")}>Home</button>
            <button onClick={() => setAba("perfil"}>Perfil</button>
            <button onClick={() => setAba("ajuda"}>Ajuda</button>
            
            */}

            <hr />

            <div>{aba}</div>
        </>
    );
}
