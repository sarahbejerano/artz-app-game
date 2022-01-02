import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { PageButton } from "../component/pageButton";

export const CreateProfile = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="createProfile">
            <PageButton text="next" variant="primary" callback={() => { console.log("text") }} />
        </div>
    );
};