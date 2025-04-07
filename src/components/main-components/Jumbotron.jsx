// importazione immagine del Jumbotron 
import jumbotronImage from '../../assets/img/jumbotron.jpg';

export default function Jumbotron() {

    return (
        <figure className='jumbotron'>
            <img src={jumbotronImage} alt="Jumbotron Image" />
        </figure>
    );
}
