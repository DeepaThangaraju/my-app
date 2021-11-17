// import from './logo.svg';
import { useState } from 'react';

import './App.css';
import { MovieList } from './movies/MovieList';
import { Link, Route, Switch, Redirect } from "react-router-dom"
import { MovieDetails } from './movies/MovieDetails';
import { AddForm, EditForm } from './movies/AddForm';
import { AddColor } from './colorbox/AddColor';
import { Welcome } from './Welcome';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti';
import { BasicForm } from './BasicForm';


export default function App() {
  // const intialmovie = [{
  //   id: "100",
  //   name: "Doctor",
  //   rating: 8.5,
  //   description: "Doctor is a 2021 Indian Tamil-language action-comedy thriller film directed by Nelson Dilipkumar. The film stars Sivakarthikeyan who also produced it under his banner Sivakarthikeyan Productions, whereas KJR Studios served as the co-producer and distributor.",
  //   poster: "https://i2.wp.com/www.socialnews.xyz/wp-content/uploads/2020/02/17/SivaKarthikeyan-s-Doctor-Movie-First-Look-HD-Posters-.jpg?quality=90&zoom=1&ssl=1",
  //   trailer: "https://www.youtube.com/embed/oQiH_Iw0kDs"
  // },
  // {
  //   id: "101",
  //   name: "Tangled",
  //   rating: 7.7,
  //   description: "The film is telling the story of the long-lost princess Rapunzel, who yearns to leave the confines of her secluded tower for an adventure. Against her foster mother's wishes, she accepts the aid of a handsome intruder, Flynn Rider, to take her out into the world which she has never seen.",
  //   poster: "https://i.pinimg.com/originals/4a/c1/60/4ac1603157230f9a3622e388bf997b34.jpg",
  //   trailer: "https://www.youtube.com/embed/JYKpIr1lSG0"
  // },
  // {
  //   id: "102",
  //   name: "Fast and Furious 6",
  //   rating: 7,
  //   description: "In the film, Dominic Toretto, Brian O'Conner, and the team are offered amnesty for their past crimes in exchange for apprehending a mercenary organization, one member of which is Toretto's presumed deceased lover and wife, Letty Ortiz.",
  //   poster: "https://d9nvuahg4xykp.cloudfront.net/4508989947247677680/185521559806925170.jpg",
  //   trailer: "https://www.youtube.com/embed/RMmLTmjXKH8"
  // },
  // {
  //   id: "103",
  //   name: "Master",
  //   rating: 7.8,
  //   description: "Master is a 2021 Indian Tamil-language action thriller film written and directed by Lokesh Kanagaraj. ... The film revolves around an alcoholic professor, J. D. (Vijay), who takes a three-month teaching job in a juvenile home, unbeknownst to him.",
  //   poster: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202001/Master_2.jpeg?8rcC0rlw0oakojvuh12Y8RNG04grcC4u&size=1200:675",
  //   trailer: "https://www.youtube.com/embed/wNWKwjWjWcY "
  // },
  // {
  //   id: "104",
  //   name: "Ice Age",
  //   rating: 7.5,
  //   description: "On Earth 20,000 years ago, everything was covered in ice. A group of friends, Manny, a mammoth, Diego, a saber tooth tiger, and Sid, a sloth encounter an Eskimo human baby. They must try to return the baby back to his tribe before a group of saber tooth tigers find him and eat him.",
  //   poster: "https://i.pinimg.com/originals/1a/94/79/1a947934e608f510eb5b7160074793f1.jpg",
  //   trailer: "https://www.youtube.com/embed/i4noiCRJRoE"
  // },
  // {
  //   id: "105",
  //   name: "Boss Baby",
  //   rating: 6.3,
  //   description: "The first installment in The Boss Baby franchise, the plot follows a boy helping his baby brother who is a secret agent in the war for adults' love between babies and puppies. The Boss Baby premiered at the Miami International Film Festival on March 12, 2017, and was released in the United States on March 31.",
  //   poster: "https://picfiles.alphacoders.com/107/thumb-107066.jpg",
  //   trailer: "https://www.youtube.com/embed/k397HRbTtWI"
  // },
  // ]


  return (

    <div className="App" >
      <nav>
        <ul>
          <li><Link exact to="/">Home</Link></li>
          <li><Link to="/AddForm">Add Movie</Link></li>
          <li> <Link to="/MovieList">Movie List</Link></li>
          <li><Link to="/colorBox">Color Box</Link></li>
          <li><Link to="/tictactoe">TicTacToe</Link></li>
          <li><Link to="/form">Form</Link></li>
        </ul>
      </nav>


      <Switch>
        <Route exact path="/">
          <Welcome />

        </Route>
        <Route path="/tictactoe">
          <Tictactoe />
        </Route>
        <Route path="/AddForm">

          <AddForm />
        </Route>
        <Route path="/flim">
          <Redirect to="/MovieList" />

        </Route>

        <Route path="/MovieList/edit/:id">
          <EditForm />
        </Route>
        <Route path="/MovieList/:id">

          <MovieDetails />
        </Route>
        <Route path="/MovieList">
          <MovieList />
        </Route>
        <Route path="/form">
          <BasicForm />
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

function NotFound() {
  return (
    <div>
      <img src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif" alt="Not Found"></img>
    </div>
  )
}

function Tictactoe() {
  const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null]);
  const [turn, setTurn] = useState("X");
  const { width, height } = useWindowSize()
  const [isXturn, setIsXturn] = useState(true);
  const sty = { width: "100%", marginTop: "1rem" }

  const decideWinner = (board) => {
    const lines = [[0, 1, 2],
    [0, 3, 6],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 4, 6],
    [0, 4, 8],
    [2, 4, 8]];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] === board[b] && board[b] === board[c] && board[a] !== null) {
        console.log("winnner is", board[a]);
        return board[a];
      }
    }
    return null;
  };
  const winner = decideWinner(board);
  const handleclick = (index) => {
    if (winner === null && (!board[index])) {
      const boardcopy = [...board];
      boardcopy[index] = isXturn ? "X" : "O";
      setBoard(boardcopy);
      setIsXturn(!isXturn);
    }
  };
  return (
    <div className="game">
      {winner ? <Confetti
        width={width}
        height={height}
      /> : " "}

      <div className="board">
        {board.map((val, index) => (<Box val={val} onplayerClick={() => handleclick(index)} />))}


        {isXturn ? <h2>X Turn</h2> : <h2>O Turn</h2>}<br />
        <input
          style={sty}
          value={turn}
          onChange={(event) => setTurn(event.target.value)}
          placeholder="Start with" /><br />
        <button style={sty} onClick={Restart}>Restart</button><br />
        {winner ? <h2>winner is:{winner}</h2> : ""} <br />
      </div>

    </div >
  )
}

function Restart() {

  return (
    <div>
      <Tictactoe />
    </div>
  )
}


function Box({ onplayerClick, val }) {

  // const [val, setVal] = useState(null)
  const styls = { color: val === "X" ? "green" : "red" };
  return (
    <div style={styls}
      onClick={onplayerClick} className="gamebox">
      {val}
    </div>
  )
}


