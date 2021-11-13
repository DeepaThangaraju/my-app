

import { Msg } from "./Msg";
import { useHistory } from "react-router-dom"

export function MovieList({ movies, setMovieList }) {
    const history = useHistory();

    return (
        <section>
            {/* <div><AddMovie />
     </div> */}
            <div className="Movie">
                {movies.map(({ name, poster, rating, description }, index) => <Msg
                    names={name}
                    image={poster}
                    rate={rating}
                    des={description}
                    id={index}
                    deletebutton={<button onClick={() => {
                        console.log(index);
                        const deleteid = index;
                        const remainingMovies = movies.filter((mv, idx) => idx !== deleteid);
                        console.log(remainingMovies);
                        setMovieList(remainingMovies);
                    }}><i class="fas fa-trash"></i></button>}
                    editbutton={<button onClick={() => history.push("/MovieList/edit/" + index)}><i class="fas fa-pen"></i></button>} />
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

