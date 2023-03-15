

/*

export default function Mensagem() {
    const titulo = "As batatas quando nascem se esparramam pelo chão"
    const autor = "João Lima";
    const linkImg = "https://picsum.photos/200"

    return (
        <section className="mensagem">
            <h2 className="titulo">{ titulo.toUpperCase() }</h2>
            <p>Autor: { autor }</p>
            <p>Este é um parágrafo com uma frase legal!</p>

            <p>Como já dizia { autor }: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consectetur culpa placeat optio cum modi minima numquam autem non, facere mollitia soluta cupiditate aspernatur quasi dicta. Numquam quis ratione perspiciatis.
            </p>
            <img src= { linkImg } alt="Img" />
        </section>
    );
}

*/

// Export = define que a função pode ser importada
export function Mensagem() {
    const textoTitulo = "As batatas quando nascem se esparramam pelo chão";
    const nomeAutor = "J. Almir";
    const linkImagem = "https://picsum.photos/200";

    return (
        <section className="mensagem">
        <h2 className="titulo">{textoTitulo.toUpperCase()}</h2>
        <img src={linkImagem} />
        <p className="paragrafo">
            Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss deixa as
            pessoas mais interessantis.Cevadis im ampola pa arma uma pindureta.Per
            aumento de cachacis, eu reclamis. A ordem dos tratores não altera o pão
            duris.
        </p>
        <small>Esta frase foi criada por {nomeAutor}</small>
        </section>
    );
}