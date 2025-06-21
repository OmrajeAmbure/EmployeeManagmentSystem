import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function About() {
    return (
        <Container className="my-2">
            <h1 className="text-center mb-4">About Employee Management System</h1>
            <p className="text-center text-muted mb-5">
                Empower your HR team to manage employees efficiently and securely.
            </p>

            <Row className="g-4">
                <Col md={6}>
                    <Card className="shadow-sm h-100">
                        <Card.Body>
                            <Card.Title>What is EMS?</Card.Title>
                            <Card.Text>
                                The Employee Management System (EMS) is a web application designed to help organizations manage employee records including personal details, work history, skills, salary, and more. It allows administrators to easily create, update, delete, and view employee information in a centralized and organized manner.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card className="shadow-sm h-100">
                        <Card.Body>
                            <Card.Title>Why Use It?</Card.Title>
                            <Card.Text>
                                EMS improves productivity by reducing manual paperwork, helps ensure compliance, and enhances data security. It's a perfect tool for HR departments, managers, and business owners to make smarter decisions with organized data.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mt-4 g-4">
                <Col md={4}>
                    <Card className="shadow-sm h-100 text-center">
                        <Card.Body>
                            <Card.Title>🚀 Fast</Card.Title>
                            <Card.Text>
                                Quick access to employee data with real-time updates.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="shadow-sm h-100 text-center">
                        <Card.Body>
                            <Card.Title>🔒 Secure</Card.Title>
                            <Card.Text>
                                Built with role-based access and secure data handling.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="shadow-sm h-100 text-center">
                        <Card.Body>
                            <Card.Title>📈 Scalable</Card.Title>
                            <Card.Text>
                                Suitable for small teams or enterprise-level workforce.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default About;
