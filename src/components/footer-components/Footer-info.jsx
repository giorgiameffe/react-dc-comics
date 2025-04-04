// importazione Info Link
import InfoLink from './Info-link.jsx';

// Funzione FooterInfo

export default function FooterInfo(props) {

    return (
        <div className="info">
            <div className="raw container">
                <div className="column">
                    <h3>Dc Comics</h3>
                    <ul className="list-info">
                        <InfoLink text={props.comics[0]} />
                        <InfoLink text={props.comics[1]} />
                        <InfoLink text={props.comics[2]} />
                        <InfoLink text={props.comics[3]} />
                        <InfoLink text={props.comics[4]} />
                        <InfoLink text={props.comics[5]} />
                        <InfoLink text={props.comics[6]} />

                    </ul>

                    <h3>Shop</h3>
                    <ul className="list-info">
                        <InfoLink text={props.shop[0]} />
                        <InfoLink text={props.shop[1]} />
                    </ul>
                </div>
                <div className="column">
                    <h3>Dc</h3>
                    <ul className="list-info">
                        <InfoLink text={props.dc[0]} />
                        <InfoLink text={props.dc[1]} />
                        <InfoLink text={props.dc[2]} />
                        <InfoLink text={props.dc[3]} />
                        <InfoLink text={props.dc[4]} />
                        <InfoLink text={props.dc[5]} />
                        <InfoLink text={props.dc[6]} />
                        <InfoLink text={props.dc[7]} />
                        <InfoLink text={props.dc[8]} />
                        <InfoLink text={props.dc[9]} />
                        <InfoLink text={props.dc[10]} />
                    </ul>
                </div>

                <div className="column">
                    <h3>Sites</h3>
                    <ul className="list-info">
                        <InfoLink text={props.sites[0]} />
                        <InfoLink text={props.sites[1]} />
                        <InfoLink text={props.sites[2]} />
                        <InfoLink text={props.sites[3]} />
                        <InfoLink text={props.sites[4]} />
                    </ul>
                </div>
            </div>
        </div>
    );
}
