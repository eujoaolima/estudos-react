/*

Crie um componente Postagem que possui:
	- Uma imagem como demonstração da postagem;
	- Um corpo de seção com <Titulo>;
	- Aplique estilizações nos elementos desse componente;

- Crie um componente <Blog> que possui:
	- Vários componente <Postagem>.

- Crie um componente <Footer>.

*/

import Titulo from "../Título/Titulo"

/*

export default function Postagem () {
    const imagem = "https://picsum.photos/200";
    const title = "Ta chovendo hamburguer";
    const autor = "Batata";

    return (
        <section className="postagem">
            <img src= { imagem } alt="Img" />
            <h2 className="titulo">{ title.toUpperCase() }</h2>
            <Titulo />
            <p>BATATA BATATA BATATA</p>

            <p>Como já dizia { autor }: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consectetur culpa placeat optio cum modi minima numquam autem non, facere mollitia soluta cupiditate aspernatur quasi dicta. Numquam quis ratione perspiciatis.
            </p>
        </section>
    )   

}

*/

export default function Postagem() {
    return (
        <section>
        <Titulo></Titulo>
        <img src="https://picsum.photos/200" alt="Imagem aleatória" />
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse dolor
            pariatur commodi a repellendus aperiam.
        </p>
        </section>
    );
}