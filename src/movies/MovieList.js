

import { Msg } from "./Msg";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_URL } from "./global_constant";
export function MovieList() {
    const [movieList, setMovieList] = useState([]);
    const getmovie = () => {
        fetch(`${API_URL}/movies`)
            .then((data) => data.json())
            .then((mov) => setMovieList(mov));
    }
    useEffect(getmovie, []);
    const history = useHistory();
    console.log(movieList);
    const deletemovie = (id) => {
        fetch(`${API_URL}/movies/${id}`,
            {
                method: "DELETE",
            })
            .then(() => getmovie());


    }

    return (
        <section>
            {/* <div><AddMovie />
     </div> */}
            <div className="Movie">
                {movieList.map(({ name, rating, description, poster, id }, index) => <Msg
                    name={name}
                    image={poster}
                    rate={rating}
                    des={description}
                    id={id}
                    deletebutton={<button onClick={() => {
                        // console.log(index);
                        // const deleteid = index;
                        // const remainingMovies = movieList.filter((mv, idx) => idx !== deleteid);
                        // console.log(remainingMovies);
                        // setMovieList(remainingMovies);
                        deletemovie(id);


                    }}><i class="fas fa-trash"></i></button>}
                    editbutton={<button onClick={() => history.push(`/MovieList/edit/${id}`)}><i class="fas fa-pen"></i></button>}
                />

                )
                }



            </div>


        </section>);

}

// function AddMovie(){
//      const styles={display:"block",textAlign:"center"}

//     return(

//         <div style={styles}>


//                 <input 
//                 // onChange={(event)=>setName(event.target.value)}
//                 type="text" placeholder="movie name"></input><br />

//                 <input 
//                 // onChange={(event)=>setPosture(event.target.value)}
//                 type="text" placeholder="poster link"></input><br/>

//                 <input

//                 type="text" placeholder="rating"></input><br />

//                 <input type="text" 

//                 placeholder="summary"></input><br />

//                 <button>ADD</button>

//         </div>

//     )
// }

