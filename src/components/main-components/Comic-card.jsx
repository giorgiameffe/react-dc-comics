// Funzione per la card singola Comic

export default function ComicCard({ comic }) {

    return (
        <article className="comic-card">
            <div className="comic-image">
                <img src={comic.thumb} alt={comic.series} />
            </div>
            <h5>{comic.series}</h5>
        </article>
    );
}