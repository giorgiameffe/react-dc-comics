// Funzione per la card singola Comic

export default function ComicCard({ comic }) {

    return (
        <article>
            <img src={comic.thumb} alt="" />
            <h5>{comic.series}</h5>
        </article>
    );
}