import Product from "../Exercício/Product";


export default function ProductList () {
    return (
        <>
            <div className="card">
                <Product nome="Brinquedo 1" descricao="Carrinho de rolimã azul" preco="R$ 99.99"/>
            </div>

            <div className="card">
                <Product nome="Brinquedo 2" descricao="Carrinho de rolimã vermelho" preco="R$ 99.99"/>
            </div>

            <div className="card">
                <Product nome="Brinquedo 3" descricao="Carrinho de rolimã roxo" preco="R$ 99.99"/>
            </div>

            <div className="card">
                <Product nome="Brinquedo 4" descricao="Carrinho de rolimã amarelo" preco="R$ 99.99"/>
            </div>

            <div className="card">
                <Product nome="Brinquedo 5" descricao="Carrinho de rolimã verde" preco="R$ 99.99"/>
            </div>
        </>
    );
}