import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router';
import * as yup from 'yup';
import { useFormik } from "formik";
import { API_URL } from "./global_constant";

const formValidationSchema = yup.object({
    name: yup.string().required("Why not fill the name?"),
    poster: yup.string().min(4).required("why not fill the poster?"),
    rating: yup.number().min(0).max(10).required("why not fill the rating"),
    description: yup.string().min(28).required("why not fill the description"),
    trailer: yup.string().required("why not fill the trailer?").min(4),

})
export function AddForm() {
    // const [name, setName] = useState("");
    // const [poster, setPoster] = useState(" ");
    // const [rating, setRating] = useState(" ");
    // const [description, setDescription] = useState(" ");
    // const [trailer, setTrailer] = useState(" ");

    const history = useHistory();
    const { handleSubmit, values, handleChange, handleBlur, errors, touched } = useFormik({
        initialValues: {
            name: "",
            poster: "",
            rating: "",
            description: "",
            trailer: ""
        },
        // validate: validateForm,
        validationSchema: formValidationSchema,
        onSubmit: (newmovie) => {
            console.log("onsubmit", newmovie);
            addmovie(newmovie)
        },
    });

    const addmovie = (newmovie) => {
        // console.log("adding", name + " " + poster + " " + rating + " " + description);
        // const newmovie = {
        //     name,
        //     poster,
        //     rating,
        //     description,
        //     trailer
        // };
        // // setMovieList([...movies, newmovie]);

        fetch(`${API_URL}/movies`,
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
        <form onSubmit={handleSubmit} className="adding">
            <input
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="movie name" />
            {errors.name && touched.name && errors.name}<br />

            <input
                id="poster"
                name="poster"
                value={values.posterl}
                onChange={handleChange}
                onBlur={handleBlur}

                placeholder="poster link" />
            {errors.poster && touched.poster && errors.poster}<br />


            <input
                id="rating"
                name="rating"
                value={values.rating}
                onChange={handleChange}
                onBlur={handleBlur}

                placeholder="rating" />
            {errors.rating && touched.rating && errors.rating}<br />


            <input
                id="description"
                name="description"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}

                placeholder="Movie summary" />
            {errors.description && touched.description && errors.description}<br />


            <input
                id="trailer"
                name="trailer"
                value={values.trailer}
                onChange={handleChange}
                onBlur={handleBlur}

                placeholder="Trailer" />
            {errors.trailer && touched.trailer && errors.trailer}<br />



            <button type="submit" >ADD</button>
        </form>);
}
export function EditForm() {
    const { id } = useParams();


    const [movieList, setMovieList] = useState(null);
    useEffect(() => {
        fetch(`${API_URL}/movies/${id}`,
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
        fetch(`${API_URL}/movies/${movieList.id}`,
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



