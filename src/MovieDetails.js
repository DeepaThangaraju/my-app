import { useParams } from 'react-router';

export function MovieDetails({ MovieList }) {
    const { id } = useParams();
    const movie = MovieList[id];

    console.log(movie);
    return (
        <div className="movies">
            <iframe width="727" height="409" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <h1 className="movie-name">{movie.name}</h1>


            <p>Rating:<span>{movie.rating}</span> </p>

            <p>Summary:</p><textarea>{movie.description}</textarea>


        </div>
    );
}
