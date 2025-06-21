import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavScrollExample() {
    return (
        <Navbar expand="lg" bg="primary" variant="dark" sticky="top">
            <Container fluid>
                <Navbar.Brand href="/" className="fw-bold">
                    Employee Management System
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '200px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/create-employee">Create</Nav.Link>
                        <Nav.Link href="/update-employee">Update</Nav.Link>
                        <Nav.Link href="/delete-employee">Delete</Nav.Link>
                        <Nav.Link href="/show-employee">Show</Nav.Link>
                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search Employee"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;
