import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

function ShowEmployee() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/employees/read');
                setEmployees(response.data);
            } catch (error) {
                console.error('Failed to fetch employees:', error);
            }
        };

        fetchEmployees();
    }, []);

    return (
        <Container className="my-5">
            <h2 className="text-center mb-4">All Employees</h2>
            <Row className="g-4">
                {employees.map((emp) => (
                    <Col md={4} key={emp.id}>
                        <Card className="shadow-sm text-center">
                            <Card.Img
                                variant="top"
                                src={emp.imageData ? `data:image/jpeg;base64,${emp.imageData}` : 'https://via.placeholder.com/100'}
                                style={{ width: '100px', height: '100px', objectFit: 'cover', margin: '1rem auto' }}
                                className="rounded-circle"
                            />
                            <Card.Body>
                                <Card.Title>{emp.name}</Card.Title>
                                <Card.Text><strong>Email:</strong> {emp.email}</Card.Text>
                                <Card.Text><strong>Dept:</strong> {emp.department}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ShowEmployee;
