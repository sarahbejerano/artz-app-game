import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/header.scss";
import Logo from "../../img/Logo-v.2.png";

export const PageHeader = () => {
    const { actions, store } = useContext(Context);

    return (
        <Navbar className="navBarStyle" expand="md">
            <Navbar.Brand href="/">
                <img
                    alt=""
                    src={Logo}
                    className="d-inline-block align-top logo"
                />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className=" ms-auto my-2 my-lg-0" navbarScroll>
                    <Nav.Link as={Link} to="/collection">COLLECTION</Nav.Link>
                    <span className="divider">|</span>
                    <Nav.Link as={Link} to="/game">GAME</Nav.Link>
                    <span className="divider">|</span>
                    <Nav.Link as={Link} to="/profile">PROFILE</Nav.Link>
                    {store.user &&
                        <>
                            <span className="divider">|</span>
                            <Nav.Link onClick={actions.signOut} as={Button}>Logout</Nav.Link>
                        </>
                    }
                </Nav>
            </Navbar.Collapse>

        </Navbar >

    );
}
