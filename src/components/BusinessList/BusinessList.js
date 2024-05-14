import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Business from "../Business/Business";

function BusinessList ({businesses}) {
    return (
        <section className="block">
            <Container>
                <Row>
                    {businesses.map(business => (
                        <Col xs={12} md={4} ><Business business={business}/></Col> // "xs={12}" means that on small screens (phones/xs) each card will take up 12/12 of the width, so there's only 1 card per row - "md={4}" means that on devices that are medium or larger each card will take up 4/12 of the width, so there's 3 cards per row
                    ))}
                </Row>
            </Container>
        </section>
    )
};

/*
        <div>
            {businesses.map(business => (
                <Business business={business}/>
            ))}
        </div>
*/

export default BusinessList;