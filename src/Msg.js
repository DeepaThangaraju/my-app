import { useState } from 'react';
import { useHistory } from 'react-router';
import { Counter } from './Counter.js';


export function Msg({ name, image, rate, des, deletebutton, editbutton, id }) {
    //unwrapping the name and pc from object
    console.log(name, image, rate, des);
    const [show, setShow] = useState(true);
    const history = useHistory();
    const sty = { color: rate > 8 ? "green" : "red", fontWeight: "bold" };
    const disdes = { display: show ? "block" : "none" };

    return (

        < section >

            <div className="movies">
                <img className="movie-pic" src={image} alt={name} />
                <span className="info"><h1 className="movie-name">{name}</h1> <button onClick={() => {
                    console.log(id);
                    history.push("/movieList/" + id);
                }}>
                    <i class="fas fa-info-circle"></i></button>


                </span>
                <p>Rating:<span style={sty}>{rate}</span> </p>
                <button onClick={() => { setShow(!show); }}> <i class="fas fa-chevron-circle-down"></i></button>
                <p style={disdes}>Summary:</p><textarea style={disdes}>{des}</textarea>
                <div className="btns">
                    <Counter />{deletebutton}{editbutton}
                </div>

            </div >
        </section >
    );

}
