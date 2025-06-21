import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Image } from "react-bootstrap";
import axios from "axios";

function CreateEmployee() {
    const [profilePreview, setProfilePreview] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const validateForm = () => {
        const { fullName, email, phone, employeeId } = employeeData;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10}$/;

        if (!fullName || !email || !phone || !employeeId) {
            alert("Please fill all required fields.");
            return false;
        }

        if (!emailRegex.test(email)) {
            alert("Invalid email format.");
            return false;
        }

        if (!phoneRegex.test(phone)) {
            alert("Phone number should be 10 digits.");
            return false;
        }

        return true;
    };

    const [employeeData, setEmployeeData] = useState({
        fullName: "",
        employeeId: "",
        email: "",
        phone: "",
        address: "",
        dob: "",
        department: "",
        designation: "",
        joiningDate: "",
        salary: "",
        status: "",
        manager: "",
        skills: "",
        experience: "",
        education: "",
        certifications: "",
        projects: "",
        languages: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployeeData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            setProfilePreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }
        const formData = new FormData();
        for (const key in employeeData) {
            formData.append(key, employeeData[key]);
        }
        if (selectedFile) {
            formData.append("profileImage", selectedFile);
        }

        try {
            const response = await axios.post("http://localhost:8080/api/employees/submit", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });

            console.log("Employee profile created:", response.data);
            alert("Employee profile submitted successfully!");

            // Reset form
            setEmployeeData({
                fullName: "",
                employeeId: "",
                email: "",
                phone: "",
                address: "",
                dob: "",
                department: "",
                designation: "",
                joiningDate: "",
                salary: "",
                status: "",
                manager: "",
                skills: "",
                experience: "",
                education: "",
                certifications: "",
                projects: "",
                languages: ""
            });
            setSelectedFile(null);
            setProfilePreview(null);
        } catch (error) {
            console.error("Error submitting profile:", error);
            alert("Failed to submit profile.");
        }
    };


    return (
        <Container className="my-5">
            <h1 className="text-center mb-4">Create Employee Profile</h1>
            <Card className="p-4 shadow-lg rounded bg-white">
                <Row>
                    {/* Profile Image Section */}
                    <Col md={3} className="text-center mb-4">
                        <Image
                            src={profilePreview}
                            roundedCircle
                            fluid
                            alt="Profile Preview"
                            className="mb-3"
                            style={{ height: "150px", width: "150px", objectFit: "cover" }}
                        />
                        <Form.Group controlId="formFile">
                            <Form.Label>Upload Profile Image</Form.Label>
                            <Form.Control type="file" accept="image/*" onChange={handleImageUpload} />
                        </Form.Group>
                    </Col>

                    {/* Input Fields Section */}
                    <Col md={9}>
                        <Form>
                            {/* Row 1 */}
                            <Row className="mb-3">
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Name" name="fullName" value={employeeData.fullName} onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Employee ID</Form.Label>
                                        <Form.Control type="text" placeholder="Enter ID" value={employeeData.employeeId} name="employeeId" onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter Email" value={employeeData.email} name="email" onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                            </Row>

                            {/* Row 2 */}
                            <Row className="mb-3">
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Phone" name="phone" value={employeeData.phone} onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Address" value={employeeData.address} name="address" onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Date of Birth</Form.Label>
                                        <Form.Control type="date" name="dob" value={employeeData.dob} onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                            </Row>

                            {/* Row 3 */}
                            <Row className="mb-3">
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Department</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Department" value={employeeData.department} name="department" onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Designation</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Designation" value={employeeData.designation} name="designation" onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Joining Date</Form.Label>
                                        <Form.Control type="date" name="joiningDate" value={employeeData.joiningDate} onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                            </Row>

                            {/* Row 4 */}
                            <Row className="mb-3">
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Salary</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Salary" name="salary" value={employeeData.salary} onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Status</Form.Label>
                                        <Form.Control type="text" placeholder="Active / Inactive" name="status" value={employeeData.status} onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Manager</Form.Label>
                                        <Form.Control type="text" placeholder="Manager Name" name="manager" value={employeeData.manager} onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                            </Row>

                            {/* Row 5 */}
                            <Row className="mb-3">
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Skills</Form.Label>
                                        <Form.Control type="text" placeholder="React, Node, etc." name="skills" value={employeeData.skills} onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Experience (Years)</Form.Label>
                                        <Form.Control type="text" placeholder="e.g. 3" name="experience" value={employeeData.experience} onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Education</Form.Label>
                                        <Form.Control type="text" placeholder="e.g. B.E. in CS" name="education" value={employeeData.education} onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                            </Row>

                            {/* Row 6 */}
                            <Row className="mb-3">
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Certifications</Form.Label>
                                        <Form.Control type="text" placeholder="e.g. AWS Certified" name="certifications" value={employeeData.certifications} onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Projects</Form.Label>
                                        <Form.Control type="text" placeholder="Project Names" name="projects" value={employeeData.projects} onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Languages</Form.Label>
                                        <Form.Control type="text" placeholder="English, Hindi" name="languages" value={employeeData.languages} onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                            </Row>

                            {/* Submit Button */}
                            <div className="text-center mt-4">
                                <Button variant="success" size="lg" type="submit" onClick={(e => {
                                    handleSubmit(e);
                                })}>
                                    Submit Employee Profile
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
}

export default CreateEmployee;
