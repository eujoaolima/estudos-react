import "../../../CSS/listacompras.css";

const compras = [
    "Batata palha",
    "Batata frita pronta",
    "Batata doce",
    "Batata chips",
    "Batata inglesa",
];


const produtos = [
    { cod: 1, nome: 'Batata palha', quantidade: 5, precoUnitario: 5.5 },
    { cod: 2, nome: 'Batata frita pronta', quantidade: 3, precoUnitario: 10.5 },
    { cod: 3, nome: 'Batata doce', quantidade: 10, precoUnitario: 20 },
    { cod: 4, nome: 'Batata chips', quantidade: 5, precoUnitario: 15 },
    { cod: 5, nome: 'Batata inglesa', quantidade: 8, precoUnitario: 7.8 },
];


export default function ListaCompras () {

    const elementosCompras = compras.map((nomeCompra, index) => {
        // A key serve para controle interno do React
        return <li key={index}>{nomeCompra}</li>
    });

    const elementosProdutos = produtos.map((produto) => {
        return <div key={produto.cod} className="card-compra">
                    <h2>{produto.nome}</h2>
                    <p>Quantidade: {produto.quantidade}</p>
                    <p>Subtotal: R$ {produto.quantidade * produto.precoUnitario}</p>
                </div>
    });

    return (
        <>
            <h1>Lista de Compras</h1>

            <ul>
                {elementosCompras}
            </ul>

            <hr />

            <h1>Lista de Produtos</h1>

            <ul>
                {elementosProdutos}
            </ul>
        </>
    );
}