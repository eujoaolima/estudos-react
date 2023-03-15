import "../../../CSS/navbar.css";

export default function NavBar (props) {

// Renderização condicional = mudar o visual e estrutura do componente de acordo com algum valor

    const logado = props.logado;
    const nomeUsuario = props.nomeUsuario;

    let mensagem;

    if (logado === true) {
        mensagem = <p>Bem vindo(a), {nomeUsuario}</p>
    } else {
        mensagem = <p>Você está desconectado</p>
    }
    // && = Se o valor for verdadeiro, ele incorpora o elemento
    return (
        <div>
            <hr />
            {logado && <img width="25" src="https://www.theventuretours.com/wp-content/uploads/2020/03/avatar-icon-png-1-1024x1024.png"/>}
            {mensagem}
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Produtos</a></li>
                <li><a href="#">Ajuda</a></li>
                {logado && <li><a href="#">Perfil</a></li>}
                {!logado && <li><a href="#">Login</a></li>}
                {!logado && <li><a href="#">Cadastre-se</a></li>}
            </ul>
            <hr />
        </div>
    );
}
        