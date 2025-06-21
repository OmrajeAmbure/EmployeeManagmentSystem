import axios from "axios";
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Image, Alert } from "react-bootstrap";

function DeleteEmployee() {
    const [employeeId, setEmployeeId] = useState("");
    const [employee, setEmployee] = useState(null);
    const [deleted, setDeleted] = useState(false);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/employees/read`);
            const found = response.data.find(emp =>
                emp.employeeId === employeeId || emp.email === employeeId
            );
            if (found) {
                setEmployee(found);
                setDeleted(false);
            } else {
                alert("Employee not found");
                setEmployee(null);
            }
        } catch (error) {
            console.error("Error fetching employee:", error);
            alert("Failed to fetch employee.");
        }
    };

    const handleDelete = async () => {
        try {
            if (!employee?.id) {
                alert("Invalid employee ID. Cannot delete.");
                return;
            }

            await axios.delete(`http://localhost:8080/api/employees/delete/${employee.id}`);
            setEmployee(null);
            setDeleted(true);
        } catch (error) {
            console.error("Delete failed:", error);
            alert("Failed to delete employee.");
        }
    };


    return (
        <Container className="my-5">
            <h1 className="text-center mb-4">Delete Employee</h1>
            <Card className="p-4 shadow-sm rounded bg-light">
                <Row className="mb-4">
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Search by Employee ID or Email</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Employee ID or Email"
                                value={employeeId}
                                onChange={(e) => setEmployeeId(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={3} className="d-flex align-items-end">
                        <Button variant="primary" onClick={handleSearch}>
                            Search
                        </Button>
                    </Col>
                </Row>

                {employee && (
                    <Card className="p-3 shadow-sm border-danger">
                        <Row>
                            <Col md={2} className="text-center">
                                <Image
                                    src={`data:image/jpeg;base64,${employee.imageBase64}`}
                                    roundedCircle
                                    height="100"
                                    width="100"
                                    alt="Employee"
                                />
                            </Col>
                            <Col md={7}>
                                <h5>{employee.name}</h5>
                                <p><strong>ID:</strong> {employee.id}</p>
                                <p><strong>Email:</strong> {employee.email}</p>
                                <p><strong>Phone:</strong> {employee.phone}</p>
                                <p><strong>Department:</strong> {employee.department}</p>
                            </Col>
                            <Col md={3} className="d-flex align-items-center">
                                <Button variant="danger" onClick={handleDelete}>
                                    Delete Employee
                                </Button>
                            </Col>
                        </Row>
                    </Card>
                )}

                {deleted && (
                    <Alert variant="success" className="mt-4 text-center">
                        Employee has been successfully deleted!
                    </Alert>
                )}
            </Card>
        </Container>
    );
}

export default DeleteEmployee;
