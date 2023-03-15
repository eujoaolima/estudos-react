import Imagem1 from "../../../assets/images/1.png";
import Imagem2 from "../../../assets/images/2.png";
import Imagem3 from "../../../assets/images/3.png";
import "../../../CSS/music.css";

export default function Musics () {
    const Imagem4 = "https://picsum.photos/200";
    
    return (
        // Fragment
        
        <> 
            <div className="music">
                <img src={Imagem1} alt="Img-Music" />
                <h3>5GB</h3>
                <span>Node e Modules</span>
            </div>

            <div className="music">
                <img src={Imagem2} alt="Img-Music" />
                <h3>50GB</h3>
                <span>Node e Modules</span>
            </div>

            <div className="music">
                <img src={Imagem3} alt="Img-Music" />
                <h3>500GB</h3>
                <span>Node e Modules</span>
            </div>

            <div className="music">
                <img src={Imagem4} alt="Img-Music" />
                <h3>5000GB</h3>
                <span>Node e Modules</span>
            </div>
        </>
    );
}