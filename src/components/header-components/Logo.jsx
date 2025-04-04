// importazione logo
import logoImage from '../../assets/img/dc-logo.png';


// Funzione Logo

export default function Logo() {
    return (
        <figure className='logo'>
            <img src={logoImage} alt="Logo-dc" />
        </figure>
    )
}