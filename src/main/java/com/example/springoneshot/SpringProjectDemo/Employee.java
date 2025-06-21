package com.example.springoneshot.SpringProjectDemo;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Lob;

import java.util.Base64;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class Employee {
    private Long id; // ✅ Lombok will generate setId(Long id)
    private String employeeId;
    private String name;
    private String email;
    private String phone;
    private String department;
    private String designation;
    private String address;
    private String dob;
    private String joiningDate;
    private String salary;
    private String status;
    private String manager;
    private String skills;
    private String experience;
    private String education;
    private String certifications;
    private String projects;
    private String languages;
    @Lob
    private byte[] imageData;

    public Employee(){};
    public Employee(Long id, String employeeId, String name, String email, String phone, String department, String designation, String address, String dob, String joiningDate, String salary, String status, String manager, String skills, String experience, String education, String certifications, String projects, String languages,byte[] imageData) {
        this.id = id;
        this.employeeId = employeeId;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.department = department;
        this.designation = designation;
        this.address = address;
        this.dob = dob;
        this.joiningDate = joiningDate;
        this.salary = salary;
        this.status = status;
        this.manager = manager;
        this.skills = skills;
        this.experience = experience;
        this.education = education;
        this.certifications = certifications;
        this.projects = projects;
        this.languages = languages;
        this.imageData = imageData;
    }

    // ✅ This will be included in JSON
    @JsonProperty("imageBase64")
    public String getImageBase64() {
        if (imageData != null) {
            return Base64.getEncoder().encodeToString(imageData);
        }
        return null;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(String employeeId) {
        this.employeeId = employeeId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getJoiningDate() {
        return joiningDate;
    }

    public void setJoiningDate(String joiningDate) {
        this.joiningDate = joiningDate;
    }

    public String getSalary() {
        return salary;
    }

    public void setSalary(String salary) {
        this.salary = salary;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getManager() {
        return manager;
    }

    public void setManager(String manager) {
        this.manager = manager;
    }

    public String getSkills() {
        return skills;
    }

    public void setSkills(String skills) {
        this.skills = skills;
    }

    public String getExperience() {
        return experience;
    }

    public void setExperience(String experience) {
        this.experience = experience;
    }

    public String getEducation() {
        return education;
    }

    public void setEducation(String education) {
        this.education = education;
    }

    public String getCertifications() {
        return certifications;
    }

    public void setCertifications(String certifications) {
        this.certifications = certifications;
    }

    public String getProjects() {
        return projects;
    }

    public void setProjects(String projects) {
        this.projects = projects;
    }

    public String getLanguages() {
        return languages;
    }

    public void setLanguages(String languages) {
        this.languages = languages;
    }

    public byte[] getImageData() {
        return imageData;
    }

    public void setImageData(byte[] imageData) {
        this.imageData = imageData;
    }

    @Override
    public String toString() {
        return "EmployeeEntity{" +
                "id=" + id +
                ", employeeId='" + employeeId + '\'' +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                ", department='" + department + '\'' +
                ", designation='" + designation + '\'' +
                ", address='" + address + '\'' +
                ", dob='" + dob + '\'' +
                ", joiningDate='" + joiningDate + '\'' +
                ", salary='" + salary + '\'' +
                ", status='" + status + '\'' +
                ", manager='" + manager + '\'' +
                ", skills='" + skills + '\'' +
                ", experience='" + experience + '\'' +
                ", education='" + education + '\'' +
                ", certifications='" + certifications + '\'' +
                ", projects='" + projects + '\'' +
                ", languages='" + languages + '\'' +
                '}';
    }


    public void setImageBase64(String s) {
    }
}
