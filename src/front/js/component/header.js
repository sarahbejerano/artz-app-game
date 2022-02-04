import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../../styles/header.scss";
import Logo from "../../img/logo-ok.png";


export const PageHeader = () => {
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
                    <Nav.Link href="/collection">COLLECTION</Nav.Link>
                    <span className="divider">|</span>
                    <Nav.Link href="/game">GAME</Nav.Link>
                    <span className="divider">|</span>
                    <Nav.Link href="/profile">PROFILE</Nav.Link>
                </Nav>
            </Navbar.Collapse>

        </Navbar >

    );
}
