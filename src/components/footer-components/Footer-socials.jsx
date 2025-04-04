// importazione immagini 
import facebookIcon from '../../assets/img/footer-facebook.png';
import twitterIcon from '../../assets/img/footer-twitter.png';
import youtubeIcon from '../../assets/img/footer-youtube.png';
import pinterestIcon from '../../assets/img/footer-pinterest.png';
import periscopeIcon from '../../assets/img/footer-periscope.png';

// Funzione Footer socials

export default function FooterSocials() {
    return (
        <div className='social-banner'>
            <div className=" container social-container">
                <div>
                    <button className='sign-up-btn'>Sign up now!</button>
                </div>

                <ul className="social-list">
                    <li className='follow-us-link'>Follow Us</li>
                    <li><img src={facebookIcon} alt="Facebook Logo" /></li>
                    <li><img src={twitterIcon} alt="Twitter Logo" /></li>
                    <li><img src={youtubeIcon} alt="Youtube Logo" /></li>
                    <li><img src={pinterestIcon} alt="Pinterest Logo" /></li>
                    <li><img src={periscopeIcon} alt="Periscope Logo" /></li>
                </ul>
            </div>



        </div>

    );
}