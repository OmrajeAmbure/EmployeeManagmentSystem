import axios from "axios";
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Image, Alert } from "react-bootstrap";

function EditEmployee() {
    const [employeeId, setEmployeeId] = useState("");
    const [employeeData, setEmployeeData] = useState(null);
    const [error, setError] = useState("");
    const [profilePreview, setProfilePreview] = useState(null);

    const handleFetch = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/employees/read/empid/${employeeId}`);
            setEmployeeData(response.data);
            setProfilePreview(`data:image/jpeg;base64,${response.data.imageBase64}`);
            setError("");
        } catch (err) {
            setError("Employee not found. Please enter a valid ID.");
            setEmployeeData(null);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployeeData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8080/api/employees/${employeeData.id}`, employeeData);
            alert("Employee updated successfully!");
            setEmployeeData(null);
        } catch (err) {
            console.error("Update failed:", err);
            alert("Failed to update employee.");
        }
    };

    return (
        <Container className="my-5">
            <h2 className="text-center mb-4">Edit Employee</h2>

            {!employeeData && (
                <>
                    <Row className="justify-content-center mb-3">
                        <Col md={6}>
                            <Form.Control
                                type="text"
                                placeholder="Enter Employee ID (numeric)"
                                value={employeeId}
                                onChange={(e) => setEmployeeId(e.target.value)}
                            />
                        </Col>
                        <Col md="auto">
                            <Button variant="primary" onClick={handleFetch}>
                                Fetch Employee
                            </Button>
                        </Col>
                    </Row>
                    {error && (
                        <Row className="justify-content-center">
                            <Col md={6}>
                                <Alert variant="danger">{error}</Alert>
                            </Col>
                        </Row>
                    )}
                </>
            )}

            {employeeData && (
                <Card className="p-4 shadow-lg">
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={3} className="text-center mb-4">
                                <Image
                                    src={profilePreview}
                                    roundedCircle
                                    fluid
                                    alt="Profile"
                                    style={{ width: "150px", height: "150px", objectFit: "cover" }}
                                    className="mb-3"
                                />
                            </Col>

                            <Col md={9}>
                                <Row className="mb-3">
                                    <Col md={4}><Form.Group><Form.Label>Full Name</Form.Label><Form.Control name="name" value={employeeData.name} onChange={handleChange} /></Form.Group></Col>
                                    <Col md={4}><Form.Group><Form.Label>Email</Form.Label><Form.Control name="email" value={employeeData.email} onChange={handleChange} /></Form.Group></Col>
                                    <Col md={4}><Form.Group><Form.Label>Phone</Form.Label><Form.Control name="phone" value={employeeData.phone} onChange={handleChange} /></Form.Group></Col>
                                </Row>

                                <Row className="mb-3">
                                    <Col md={4}><Form.Group><Form.Label>Address</Form.Label><Form.Control name="address" value={employeeData.address} onChange={handleChange} /></Form.Group></Col>
                                    <Col md={4}><Form.Group><Form.Label>Date of Birth</Form.Label><Form.Control name="dob" type="date" value={employeeData.dob} onChange={handleChange} /></Form.Group></Col>
                                    <Col md={4}><Form.Group><Form.Label>Department</Form.Label><Form.Control name="department" value={employeeData.department} onChange={handleChange} /></Form.Group></Col>
                                </Row>

                                <Row className="mb-3">
                                    <Col md={4}><Form.Group><Form.Label>Designation</Form.Label><Form.Control name="designation" value={employeeData.designation} onChange={handleChange} /></Form.Group></Col>
                                    <Col md={4}><Form.Group><Form.Label>Joining Date</Form.Label><Form.Control name="joiningDate" type="date" value={employeeData.joiningDate} onChange={handleChange} /></Form.Group></Col>
                                    <Col md={4}><Form.Group><Form.Label>Salary</Form.Label><Form.Control name="salary" value={employeeData.salary} onChange={handleChange} /></Form.Group></Col>
                                </Row>

                                <Row className="mb-3">
                                    <Col md={4}><Form.Group><Form.Label>Status</Form.Label><Form.Control name="status" value={employeeData.status} onChange={handleChange} /></Form.Group></Col>
                                    <Col md={4}><Form.Group><Form.Label>Manager</Form.Label><Form.Control name="manager" value={employeeData.manager} onChange={handleChange} /></Form.Group></Col>
                                    <Col md={4}><Form.Group><Form.Label>Skills</Form.Label><Form.Control name="skills" value={employeeData.skills} onChange={handleChange} /></Form.Group></Col>
                                </Row>

                                <Row className="mb-3">
                                    <Col md={4}><Form.Group><Form.Label>Experience</Form.Label><Form.Control name="experience" value={employeeData.experience} onChange={handleChange} /></Form.Group></Col>
                                    <Col md={4}><Form.Group><Form.Label>Education</Form.Label><Form.Control name="education" value={employeeData.education} onChange={handleChange} /></Form.Group></Col>
                                    <Col md={4}><Form.Group><Form.Label>Certifications</Form.Label><Form.Control name="certifications" value={employeeData.certifications} onChange={handleChange} /></Form.Group></Col>
                                </Row>

                                <Row className="mb-3">
                                    <Col md={6}><Form.Group><Form.Label>Projects</Form.Label><Form.Control name="projects" value={employeeData.projects} onChange={handleChange} /></Form.Group></Col>
                                    <Col md={6}><Form.Group><Form.Label>Languages</Form.Label><Form.Control name="languages" value={employeeData.languages} onChange={handleChange} /></Form.Group></Col>
                                </Row>

                                <div className="text-center mt-4">
                                    <Button type="submit" variant="warning">Update Employee</Button>
                                </div>
                            </Col>
                        </Row>
                    </Form>
                </Card>
            )}
        </Container>
    );
}

export default EditEmployee;
