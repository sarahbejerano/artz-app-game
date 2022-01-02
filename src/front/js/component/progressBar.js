import React, { useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/progressBar.scss";

// const { useState } = React;
export const ProgressBar = () => {
    const [state, setState] = useState(1);

    return (
        <div className="progressBarStyle">
            <h2>{state === 10 ? `100% Complete!` : `${state}/10 questions`}</h2>
            <ProgressMeter width={state * 10} />
            {/* <ProgressButton
                progress={state}
                makeProgress={() => {
                    state < 10
                        ? setState(state + 1)
                        : setState(0);
                }}
            /> */}
        </div>

    );
};

const ProgressMeter = ({ width }) => (
    <div className="outer">
        <div
            className="inner"
            style={{
                width: `${width}%`
            }}
        >
            {/* <h5 className="text">text</h5> */}
        </div>
    </div>
);

const ProgressButton = ({ makeProgress, progress }) => (
    <button onClick={makeProgress}>
        {
            progress == 100 ? ' Yay! ' : 'Progress'
        }
    </button>
);




