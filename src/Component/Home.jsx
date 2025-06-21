import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <Container className="mt-5">
            {/* Hero Section */}
            <Row className="align-items-center text-center mb-5">
                <Col>
                    <h1 className="display-4 fw-bold">Welcome to the Employee Management System</h1>
                    <p className="lead text-muted mt-3">
                        Manage employee data efficiently. Create, view, update, and delete employee records all in one place.
                    </p>
                    <Button as={Link} to="/dashboard" variant="primary" size="lg" className="mt-3">
                        Get Started
                    </Button>
                </Col>
            </Row>

            {/* Features Section */}
            <h2 className="text-center mb-4">Core Features</h2>
            <Row className="g-4 text-center">
                <Col md={3}>
                    <Card className="shadow-sm h-100">
                        <Card.Body>
                            <Card.Title>Create Employee</Card.Title>
                            <Card.Text>Add new employees to the system quickly and easily.</Card.Text>
                            <Button as={Link} to="/create-employee" variant="success">Create</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={3}>
                    <Card className="shadow-sm h-100">
                        <Card.Body>
                            <Card.Title>Update Records</Card.Title>
                            <Card.Text>Edit employee data such as email, department, or salary.</Card.Text>
                            <Button as={Link} to="/update-employee" variant="warning">Update</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={3}>
                    <Card className="shadow-sm h-100">
                        <Card.Body>
                            <Card.Title>Delete Employee</Card.Title>
                            <Card.Text>Remove employee records safely from the database.</Card.Text>
                            <Button as={Link} to="/delete-employee" variant="danger">Delete</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={3}>
                    <Card className="shadow-sm h-100">
                        <Card.Body>
                            <Card.Title>Show Details</Card.Title>
                            <Card.Text>View employee profiles and summaries instantly.</Card.Text>
                            <Button as={Link} to="/show-employee" variant="info">View</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* About Section */}
            <Row className="mt-5">
                <Col md={12} className="text-center">
                    <h3>Why Choose Us?</h3>
                    <p className="text-muted">
                        Our Employee Management System is designed to be fast, secure, and user-friendly.
                        Whether you're an HR professional or a team manager, this tool will simplify your workflow and enhance productivity.
                    </p>
                    <Button as={Link} to="/about" variant="outline-dark">Learn More</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
