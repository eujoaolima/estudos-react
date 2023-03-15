import "./exercicios.css";

export default function Numero (props) {
        let numero = props.numero;

        let mensagem;

        if (numero % 2 !== 0 ) {
            mensagem = <p>O número {numero} é ímpar!</p>
        } else {
            mensagem = <p>O número {numero} é par!</p>
        }

        return (
            <div className="numero">
                {mensagem}
            </div>
        )
}