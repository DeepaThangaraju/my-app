// import from './logo.svg';
import { useState } from 'react';
import { useParams } from 'react-router';

import './App.css';
import { MovieList } from './MovieList';
import { Link, Route, Switch, Redirect } from "react-router-dom"

export default function App() {
  const intialmovie = [{
    name: "Doctor",
    rating: "8.5",
    description: "Doctor is a 2021 Indian Tamil-language action-comedy thriller film directed by Nelson Dilipkumar. The film stars Sivakarthikeyan who also produced it under his banner Sivakarthikeyan Productions, whereas KJR Studios served as the co-producer and distributor.",
    poster: "https://i2.wp.com/www.socialnews.xyz/wp-content/uploads/2020/02/17/SivaKarthikeyan-s-Doctor-Movie-First-Look-HD-Posters-.jpg?quality=90&zoom=1&ssl=1",
    trailer: "https://www.youtube.com/embed/oQiH_Iw0kDs"
  },
  {
    name: "Tangled",
    rating: "7.7",
    description: "The film is telling the story of the long-lost princess Rapunzel, who yearns to leave the confines of her secluded tower for an adventure. Against her foster mother's wishes, she accepts the aid of a handsome intruder, Flynn Rider, to take her out into the world which she has never seen.",
    poster: "https://i.pinimg.com/originals/4a/c1/60/4ac1603157230f9a3622e388bf997b34.jpg",
    trailer: "https://www.youtube.com/embed/JYKpIr1lSG0"
  },
  {
    name: "Fast and Furious 6",
    rating: "7",
    description: "In the film, Dominic Toretto, Brian O'Conner, and the team are offered amnesty for their past crimes in exchange for apprehending a mercenary organization, one member of which is Toretto's presumed deceased lover and wife, Letty Ortiz.",
    poster: "https://d9nvuahg4xykp.cloudfront.net/4508989947247677680/185521559806925170.jpg",
    trailer: "https://www.youtube.com/embed/RMmLTmjXKH8"
  },
  {
    name: "Master",
    rating: "7.8",
    description: "Master is a 2021 Indian Tamil-language action thriller film written and directed by Lokesh Kanagaraj. ... The film revolves around an alcoholic professor, J. D. (Vijay), who takes a three-month teaching job in a juvenile home, unbeknownst to him.",
    poster: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202001/Master_2.jpeg?8rcC0rlw0oakojvuh12Y8RNG04grcC4u&size=1200:675",
    trailer: "https://www.youtube.com/embed/wNWKwjWjWcY "
  },
  {
    name: "Ice Age",
    rating: "7.5",
    description: "On Earth 20,000 years ago, everything was covered in ice. A group of friends, Manny, a mammoth, Diego, a saber tooth tiger, and Sid, a sloth encounter an Eskimo human baby. They must try to return the baby back to his tribe before a group of saber tooth tigers find him and eat him.",
    poster: "https://i.pinimg.com/originals/1a/94/79/1a947934e608f510eb5b7160074793f1.jpg",
    trailer: "https://www.youtube.com/embed/i4noiCRJRoE"
  },
  {
    name: "Boss Baby",
    rating: "6.3",
    description: "The first installment in The Boss Baby franchise, the plot follows a boy helping his baby brother who is a secret agent in the war for adults' love between babies and puppies. The Boss Baby premiered at the Miami International Film Festival on March 12, 2017, and was released in the United States on March 31.",
    poster: "https://picfiles.alphacoders.com/107/thumb-107066.jpg",
    trailer: "https://www.youtube.com/embed/k397HRbTtWI"
  },
  ]
  const [movieList, setMovieList] = useState(intialmovie);
  return (

    <div className="App" >
      <nav>
        <ul>
          <li><Link exact to="/">Home</Link></li>
          <li><Link to="/AddForm">Add Movie</Link></li>
          <li> <Link to="/MovieList">Movie List</Link></li>
          <li><Link to="/colorBox">Color Box</Link></li>
        </ul>
      </nav>


      <Switch>
        <Route exact path="/">
          <Welcome />

        </Route>
        <Route path="/AddForm">

          <AddForm movies={movieList} setMovieList={setMovieList} />
        </Route>
        <Route path="/flim">
          <Redirect to="/MovieList" />

        </Route>
        <Route path="/MovieList/:id">

          <MovieDetails MovieList={movieList} />
        </Route>
        <Route path="/MovieList">
          <MovieList movies={movieList} />
        </Route>

        <Route path="/colorBox">
          <AddColor />
        </Route>
        <Route path="**">
          <NotFound />
        </Route>
      </Switch>

    </div>
    //map converting array into object
  );

}

function MovieDetails({ MovieList }) {
  const { id } = useParams();
  const movie = MovieList[id];

  console.log(movie);
  return (
    <div className="movies">
      <iframe width="727" height="409" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      <h1 className="movie-name">{movie.name}</h1>


      <p>Rating:<span>{movie.rating}</span> </p>

      <p>Summary:</p><textarea>{movie.description}</textarea>


    </div >
  )
}
function Welcome() {
  return (
    <div>
      <h1>welcome ☺</h1>
    </div>
  )
}

function NotFound() {
  return (
    <div>
      <img src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif" alt="Not Found"></img>
    </div>
  )
}

function AddForm({ movies, setMovieList }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState(" ");
  const [rating, setRating] = useState(" ");
  const [description, setDescription] = useState(" ");

  const addmovie = () => {
    console.log("adding", name + " " + poster + " " + rating + " " + description);
    const newmovie = {
      name,
      poster,
      rating,
      description

    };
    setMovieList([...movies, newmovie]);
  }
  return (
    <div>
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


      <button onClick={addmovie}>ADD</button>
    </div>);
}



function AddColor() {
  const [color, setColor] = useState("red");
  const sty = { backgroundColor: color }
  const [colors, setColors] = useState(["red", "crimson", "pink"]);
  return (
    <div>
      <input
        value={color}
        onChange={(event) => setColor(event.target.value)}
        style={sty}
        placeholder="enter the color" />
      {colors.map((clr, index) => (<Colorbox key={index} color={clr} />))}

      <button onClick={() => setColors([...colors, color])}>Add colors</button>
    </div>
  )
}

function Colorbox({ color }) {
  const styles = { backgroundColor: color, height: "4rem", width: "10rem", margin: "1rem" };
  return (

    <div style={styles}>

    </div>
  )
}
