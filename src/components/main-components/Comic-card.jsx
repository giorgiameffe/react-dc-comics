// Funzione per la card singola Comic

export default function ComicCard(props) {

    return (
        <article>
            <img src={props.comics.thumb} alt="" />
            <h5>{props.comics.series}</h5>
        </article>
    );
}