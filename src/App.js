// import from './logo.svg';
import { useState } from 'react';
import './App.css';

export default function App() {
  const movieList=[{
    movieName:"Doctor",
    rating:"8.5",
    description:"Doctor is a 2021 Indian Tamil-language action-comedy thriller film directed by Nelson Dilipkumar. The film stars Sivakarthikeyan who also produced it under his banner Sivakarthikeyan Productions, whereas KJR Studios served as the co-producer and distributor.",
    poster:"https://i2.wp.com/www.socialnews.xyz/wp-content/uploads/2020/02/17/SivaKarthikeyan-s-Doctor-Movie-First-Look-HD-Posters-.jpg?quality=90&zoom=1&ssl=1"
  },
  {
    movieName:"Tangled",
    rating:"7.7",
    description:"The film is telling the story of the long-lost princess Rapunzel, who yearns to leave the confines of her secluded tower for an adventure. Against her foster mother's wishes, she accepts the aid of a handsome intruder, Flynn Rider, to take her out into the world which she has never seen.",
    poster:"https://i.pinimg.com/originals/4a/c1/60/4ac1603157230f9a3622e388bf997b34.jpg"
  },
{
  movieName:"Fast and Furious 6",
  rating:"7",
  description:"In the film, Dominic Toretto, Brian O'Conner, and the team are offered amnesty for their past crimes in exchange for apprehending a mercenary organization, one member of which is Toretto's presumed deceased lover and wife, Letty Ortiz.",
  poster:"https://d9nvuahg4xykp.cloudfront.net/4508989947247677680/185521559806925170.jpg"
},
{
  movieName:"Master",
  rating:"7.8",
  description:"Master is a 2021 Indian Tamil-language action thriller film written and directed by Lokesh Kanagaraj. ... The film revolves around an alcoholic professor, J. D. (Vijay), who takes a three-month teaching job in a juvenile home, unbeknownst to him.",
  poster:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202001/Master_2.jpeg?8rcC0rlw0oakojvuh12Y8RNG04grcC4u&size=1200:675"
},
{
  movieName:"Ice Age",
  rating:"7.5",
  description:"On Earth 20,000 years ago, everything was covered in ice. A group of friends, Manny, a mammoth, Diego, a saber tooth tiger, and Sid, a sloth encounter an Eskimo human baby. They must try to return the baby back to his tribe before a group of saber tooth tigers find him and eat him.",
  poster:"https://i.pinimg.com/originals/1a/94/79/1a947934e608f510eb5b7160074793f1.jpg"
},
{
  movieName:"Boss Baby",
  rating:"6.3",
  description:"The first installment in The Boss Baby franchise, the plot follows a boy helping his baby brother who is a secret agent in the war for adults' love between babies and puppies. The Boss Baby premiered at the Miami International Film Festival on March 12, 2017, and was released in the United States on March 31.",
  poster:"https://picfiles.alphacoders.com/107/thumb-107066.jpg"
},
] 
  return (
    
    <div className="App" >
      
       <MovieList movies={movieList}/> 
       
     
    </div>
    //map converting array into object
  );
  
}
function Counter(){
  const [like,setLike] = useState(0);
  const [dislike,setDislike]=useState(0);
  return(
    <div className="counter">
      <button  className="likes-dislikes"
      onClick={() => {
        setLike(like+1);
      }
      }
      >👍{like}</button>
      <button className="likes-dislikes"
      onClick={() => {
        setDislike(dislike+1);
      }
      }
      >👎{dislike}</button>
      
    </div>
  );
}
function MovieList({movies})
{
  
  return(
  <section className="Movie">
  {movies.map(({movieName,poster,rating,description})=>  <Msg 
    names={movieName} 
    image={poster} 
    rate={rating} 
    des={description} />) }
</section>);
}

function Msg({names,image,rate,des}){  
       //unwrapping the name and pc from object
       const [show,setShow]=useState(true);
     const sty={ color :rate > 8 ? "green" : "red",fontWeight:"bold"};
     const disdes={display: show ? "block" : "none"}
  return (<div className="movies">
    
     
    <img className="movie-pic" src={image} alt={names} />
    <h1 className="movie-name">{names}</h1>
    <p>Rating:<span style={sty}>{rate}</span> </p>
    <button onClick={()=>{setShow(!show)}}>hide description</button>
    <p style={disdes}>Description:</p><textarea style={disdes}>{des}</textarea>
    <Counter />
    </div>
    
  );
  
}


// function SetColor(){
//   const [color,setColor]=useState("red");
//   const styles={backgroundColor:color};
//   return (<div>
//     <input 
//     value={color}
//     onChange={(event)=>setColor(event.target.value)}
//     style={styles}
//     placeholder="enter the color"/>
//   </div>);
// }