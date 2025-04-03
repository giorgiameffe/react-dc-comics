// importazione immagini 
import FacebookIcon from '../../assets/img/footer-facebook.png';
import TwitterIcon from '../../assets/img/footer-twitter.png';
import YoutubeIcon from '../../assets/img/footer-youtube.png';
import PinterestIcon from '../../assets/img/footer-pinterest.png';
import PeriscopeIcon from '../../assets/img/footer-periscope.png';

// Funzione Footer socials

export default function FooterSocials() {
    return (
        <div className="social-container">
            <div>
                <a href='#' className='sign-up-btn'>Sign up now!</a>
            </div>

            <ul className="social-list">
                <li className='follow-us-link'>Follow Us</li>
                <li><img src={FacebookIcon} alt="Facebook Logo" /></li>
                <li><img src={TwitterIcon} alt="Twitter Logo" /></li>
                <li><img src={YoutubeIcon} alt="Youtube Logo" /></li>
                <li><img src={PinterestIcon} alt="Pinterest Logo" /></li>
                <li><img src={PeriscopeIcon} alt="Periscope Logo" /></li>
            </ul>
        </div>
    );
}