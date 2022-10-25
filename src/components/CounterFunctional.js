import React, {useState} from "react";

function CounterFunctional() {

    const [counter, setCounter] = useState(0);

    return (
        <div>
            <div className="d-flex">
                <button className="btn btn-danger" onClick={() => setCounter(counter - 1)}>-</button>
                <h5 className="m-2">{counter}</h5>
                <button className="btn btn-primary" onClick={() => setCounter(counter + 1)}>+</button>
            </div>
        </div>
    );
}

export default CounterFunctional;
