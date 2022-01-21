import React from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import "../../styles/header.scss";
import Logo from "../../img/logo-ok.png";


export const PageHeader = () => {
    return (
        <Navbar className="navBarStyle" expand="md">
            <Navbar.Brand href="#home">
                <img

                    alt=""
                    src={Logo}
                    className="d-inline-block align-top logo"
                />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className=" ms-auto my-2 my-lg-0"
                    // style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#action1">GAME</Nav.Link>
                    <span className="divider">|</span>
                    <Nav.Link href="#action2">PROFILE</Nav.Link><span className="divider">|</span>
                    <NavDropdown title="COLLECTION" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Something else here
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>

        </Navbar >

    );
}
