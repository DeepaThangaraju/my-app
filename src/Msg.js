import { useState } from 'react';
import { Counter } from './Counter.js';


export function Msg({ names, image, rate, des }) {
    //unwrapping the name and pc from object
    const [show, setShow] = useState(true);
    const sty = { color: rate > 8 ? "green" : "red", fontWeight: "bold" };
    const disdes = { display: show ? "block" : "none" };
    return (
        <section>

            <div className="movies">
                <img className="movie-pic" src={image} alt={names} />
                <h1 className="movie-name">{names}</h1>
                <p>Rating:<span style={sty}>{rate}</span> </p>
                <button onClick={() => { setShow(!show); }}>{show ? "hide" : "show"} description</button>
                <p style={disdes}>Description:</p><textarea style={disdes}>{des}</textarea>
                <Counter />
            </div>
        </section>
    );

}
