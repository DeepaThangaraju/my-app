import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router';

export function AddForm() {
    const [name, setName] = useState("");
    const [poster, setPoster] = useState(" ");
    const [rating, setRating] = useState(" ");
    const [description, setDescription] = useState(" ");
    const [trailer, setTrailer] = useState(" ");
    const history = useHistory();

    const addmovie = () => {
        console.log("adding", name + " " + poster + " " + rating + " " + description);
        const newmovie = {
            name,
            poster,
            rating,
            description,
            trailer
        };
        // setMovieList([...movies, newmovie]);
        fetch("https://6166c4e813aa1d00170a6717.mockapi.io/movies",
            {
                method: "POST",
                body: JSON.stringify(newmovie),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(() => history.push("/MovieList"));
    };
    return (
        <div className="adding">
            <input
                // value={name}

                onChange={(event) => setName(event.target.value)}
                placeholder="movie name" /><br />

            <input
                // value={posture}
                onChange={(event) => setPoster(event.target.value)}
                placeholder="poster link" /><br />

            <input
                // value={rate}
                onChange={(event) => setRating(event.target.value)}
                placeholder="rating" /><br />

            <input

                onChange={(event) => setDescription(event.target.value)}
                placeholder="Movie summary" /><br />

            <input

                onChange={(event) => setTrailer(event.target.value)}
                placeholder="Trailer" /><br />


            <button onClick={addmovie}>ADD</button>
        </div>);
}
export function EditForm() {
    const { id } = useParams();


    const [movieList, setMovieList] = useState(null);
    useEffect(() => {
        fetch(`https://6166c4e813aa1d00170a6717.mockapi.io/movies/${id}`,
            { method: "GET" })
            .then((data) => data.json())
            .then((mov) => setMovieList(mov));
    }, [id]);
    // const mov = movies[id];
    // console.log(id, mov);
    return movieList ? <Updatemovie movieList={movieList} /> : " ";//display only when the data is loaded
}
function Updatemovie({ movieList }) {
    const [name, setName] = useState(movieList.name);
    const [poster, setPoster] = useState(movieList.poster);
    const [rating, setRating] = useState(movieList.rating);
    const [description, setDescription] = useState(movieList.description);
    const [trailer, setTrailer] = useState(movieList.trailer);
    const history = useHistory();


    const editmovie = () => {
        console.log("adding", name + " " + poster + " " + rating + " " + description);
        const updatedmovie = {
            name,
            poster,
            rating,
            description,
            trailer
        };
        // setMovieList([...movies, updatedmovie]);
        // const copy = [...movies];
        // copy[id] = updatedmovie;
        // setMovieList(copy);
        fetch(`https://6166c4e813aa1d00170a6717.mockapi.io/movies/${movieList.id}`,
            {
                method: "PUT",
                body: JSON.stringify(updatedmovie),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(() => history.push("/MovieList"));
    };

    return (
        <div className="adding">
            <input
                value={name}

                onChange={(event) => setName(event.target.value)}
                placeholder="movie name" /><br />

            <input
                value={poster}
                onChange={(event) => setPoster(event.target.value)}
                placeholder="poster link" /><br />

            <input
                value={rating}
                onChange={(event) => setRating(event.target.value)}
                placeholder="rating" /><br />

            <input
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Movie summary" /><br />

            <input
                value={trailer}
                onChange={(event) => setTrailer(event.target.value)}
                placeholder="Trailer" /><br />


            <button onClick={() => {

                editmovie();
            }}>SAVE</button>
        </div>);
}



