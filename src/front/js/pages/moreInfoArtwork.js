import React from "react";
import PropTypes from "prop-types";
import "../../styles/moreInfoArtworks.scss";
import { Col, Container, Row } from "react-bootstrap";


export const InfoArtworks = ({ id, image, title, artist_title, date_end, style_title, place_of_origin, medium_display, dimensions, ...props }) => {
    return (

        <Container className="InfoArtworksBody">
            <Row xs={1} md={2}>
                <Col className="one">
                    <h1>Color and Text Block</h1>
                </Col>
                <Col className="two">
                    <img src="https://www.artic.edu/iiif/2/f8fd76e9-c396-5678-36ed-6a348c904d27/full/843,/0/default.jpg" alt="boximage" />
                </Col>
            </Row>
        </Container>


        //         <Modal
        //             {...props}
        //             size="lg"
        //             aria-labelledby="contained-modal-title-vcenter"
        //             centered
        //             className="modalInfoContainer"
        //         >
        //             <Modal.Header>
        //                 <Modal.Title id="contained-modal-title-vcenter">
        //                     <h3> {title}</h3>
        //                     <h4> {artist_title}</h4>
        //                 </Modal.Title>
        //             </Modal.Header>
        //             <Modal.Body>

        //                 <div className="imageModalContainer"><img src={image} /></div>
        //                 <h4>
        //                     {place_of_origin}, {date_end} <br />
        //                     {style_title} <br />
        //                 </h4>
        //             </Modal.Body>

        //             <Modal.Footer>
        //                 <PageButton
        //                     text="Close"
        //                     variant="primary small"
        //                     callback={props.onHide}
        //                 />

        //             </Modal.Footer>
        //             <h7> Courtesy of Art Institute of Chicago API </h7>
        //         </Modal >

    );
}

InfoArtworks.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    artist_title: PropTypes.string,
    place_of_origin: PropTypes.string,
    date_end: PropTypes.number,
    style_title: PropTypes.string,
    medium_display: PropTypes.string,
    dimensions: PropTypes.string,
    image: PropTypes.string,


};