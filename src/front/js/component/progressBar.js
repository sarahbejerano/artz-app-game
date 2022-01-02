import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/progressBar.scss";

export const ProgressBar = () => {
    const { store } = useContext(Context);
    console.log(store)
    return (
        <div className="progressBarStyle">
            <h2>{store.score === 10 ? `100% Complete!` : `${store.score}/10 questions`}</h2>
            <ProgressMeter width={store.score * 10} />
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




