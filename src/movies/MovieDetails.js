
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';


export function MovieDetails() {
    const { id } = useParams();

    const [movieList, setMovieList] = useState({});
    useEffect(() => {
        fetch(`https://6166c4e813aa1d00170a6717.mockapi.io/movies/${id}`,
            { method: "GET" })
            .then((data) => data.json())
            .then((mov) => setMovieList(mov));
    }, [id]);
    const movie = movieList;

    console.log(movie);
    return (
        <div className="movies">
            <iframe width="727" height="409" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <h1 className="movie-name">{movie.name}</h1>


            <p>Rating:<span>{movie.rating}</span> </p>

            <p>Summary:{movie.description}</p>


        </div>
    );
}
