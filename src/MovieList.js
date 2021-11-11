

import { Msg } from "./Msg";

export function MovieList({ movies }) {

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
                    id={index} />)}

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

