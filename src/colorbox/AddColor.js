import { useState } from 'react';
import { Colorbox } from "./Colorbox";

export function AddColor() {
    const [color, setColor] = useState("red");
    const sty = { backgroundColor: color };
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
    );
}
