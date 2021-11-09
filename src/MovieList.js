

import { Msg } from "./Msg";

export function MovieList({ movies }) {

  return (
    <section>
     <div><AddMovie />
     </div>
     <div  className="Movie">
      {movies.map(({ movieName, poster, rating, description }) => <Msg
        names={movieName}
        image={poster}
        rate={rating}
        des={description} />)}
        </div>
    </section>);
}

function AddMovie(){
     const styles={display:"block",textAlign:"center"}
    //  const [name,setName]=useState();
    //  const [posture,setPosture]=useState();
    //  const [rate,setRate]=useState();
    //  const [summary,setSummary]=useState();
    return(
           
        <div style={styles}>
            
                
                <input 
                // onChange={(event)=>setName(event.target.value)}
                type="text" placeholder="movie name"></input><br />
                
                <input 
                // onChange={(event)=>setPosture(event.target.value)}
                type="text" placeholder="poster link"></input><br/>
                
                <input
                
                type="text" placeholder="rating"></input><br />
            
                <input type="text" 
            
                placeholder="summary"></input><br />

                <button>ADD</button>
            
        </div>

    )
}

