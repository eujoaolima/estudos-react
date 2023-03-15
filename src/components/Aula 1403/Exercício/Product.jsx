export default function Product (props) {
    
    let { nome, descricao, preco } = props;
    const imagem = "https://picsum.photos/200"; 
    
    return (
        <div className="produto">
            <img src={imagem} alt="Produto-Img"/>
            <h1>{nome}</h1>
            <p>{descricao}</p>
            <p>{preco}</p>
            <button>Comprar</button>
        </div>
    );
}