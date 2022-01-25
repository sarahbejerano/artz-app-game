import React, { useContext, useState, useEffect } from "react";
// import validator from "validator";
// import { useHistory } from "react-router-dom";
// import { Context } from "../store/appContext";
// import useSWR from "swr";
import { PageHeader } from "../component/header";
import { CollectionCard } from "../component/card";
import { Row, Col } from "react-bootstrap"
import "../../styles/collection.scss";


export const CollectionPage = () => {

    return (
        <>
            <div className="collectionPageContainer">
                <PageHeader />
                <Row xs={1} md={4} className="cardRow">
                    {Array.from({ length: 8 }).map((_, idx) => (
                        <Col className="cardColumn">
                            <CollectionCard url="/detail/modernism" title="Modernism" year="1910" image="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/6/18/1434647790018/d0bb6745-5cbe-4f5a-993d-4c9b25ab86b8-2060x1479.jpeg?width=465&quality=45&auto=format&fit=max&dpr=2&s=446f767582a2c8b288be76dd1113a62a" />
                        </Col>
                    ))}
                </Row>


                {/* <CollectionCard url="/modernism" title="Modernism" image="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/6/18/1434647790018/d0bb6745-5cbe-4f5a-993d-4c9b25ab86b8-2060x1479.jpeg?width=465&quality=45&auto=format&fit=max&dpr=2&s=446f767582a2c8b288be76dd1113a62a" /> */}


                {/* <div className="avatarProfile"> {store.user && <img src={avatars[store.user.avatarID]} />}</div>
            {store.user && <h2 className="nameProfile">
                {store.user.profileName}
            </h2>}
            <img className="pointsStar" src={star} />
            <div className="scoreplayer">{store.score}/10
            </div>
            <div className="buttonContainer">
                <PageButton text="finish" variant="secondary"
                    callback={() => { restartScore() }} />
            </div> */}

            </div>
        </>
    );
};

// UserProfile.propTypes = {
//     onQuit: PropTypes.func,


// };


