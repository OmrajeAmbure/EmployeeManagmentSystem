import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="bg-dark text-light py-3 mt-auto">
            <Container>
                <Row className="text-center text-md-start align-items-center">
                    <Col md={6}>
                        <p className="mb-0">
                            &copy; {new Date().getFullYear()} Employee Management System. All rights reserved.
                        </p>
                    </Col>
                    <Col md={6} className="text-md-end mt-2 mt-md-0">
                        <a href="/privacy" className="text-light me-3 text-decoration-none">Privacy Policy</a>
                        <a href="/terms" className="text-light text-decoration-none">Terms & Conditions</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
