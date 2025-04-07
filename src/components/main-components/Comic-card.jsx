// Funzione per la card singola Comic

export default function ComicCard(props) {

    return (
        <article>
            <img src={props.comics[0].thumb} alt="" />
            <h5>{props.comics[0].series}</h5>
        </article>
    );
}