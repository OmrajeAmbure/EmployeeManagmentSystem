package com.example.springoneshot.SpringProjectDemo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("http://localhost:5173/")
@RequestMapping("/api/employees")
public class EmpController {

        @Autowired
        private EmployeeService employeeService;

        @GetMapping("/read")
        public List<Employee> getAllEmployee() {
                return employeeService.readEmployee();
        }

        @PostMapping(value = "/submit", consumes = "multipart/form-data")
        public ResponseEntity<String> createEmployee(
                @RequestParam("profileImage") MultipartFile image,
                @RequestParam Map<String, String> formFields) {
                try {
                        if (image == null || image.isEmpty()) {
                                return ResponseEntity.badRequest().body("Profile image is required.");
                        }

                        Employee emp = new Employee();
                        emp.setEmployeeId(formFields.get("employeeId"));
                        emp.setName(formFields.get("fullName"));
                        emp.setEmail(formFields.get("email"));
                        emp.setPhone(formFields.get("phone"));
                        emp.setDepartment(formFields.get("department"));
                        emp.setDesignation(formFields.get("designation"));
                        emp.setAddress(formFields.get("address"));
                        emp.setDob(formFields.get("dob"));
                        emp.setJoiningDate(formFields.get("joiningDate"));
                        emp.setSalary(formFields.get("salary"));
                        emp.setStatus(formFields.get("status"));
                        emp.setManager(formFields.get("manager"));
                        emp.setSkills(formFields.get("skills"));
                        emp.setExperience(formFields.get("experience"));
                        emp.setEducation(formFields.get("education"));
                        emp.setCertifications(formFields.get("certifications"));
                        emp.setProjects(formFields.get("projects"));
                        emp.setLanguages(formFields.get("languages"));

                        String result = employeeService.createEmployee(emp, image);
                        return ResponseEntity.ok(result);
                } catch (Exception e) {
                        return ResponseEntity.status(500).body("Failed to create employee: " + e.getMessage());
                }
        }

        @DeleteMapping("/delete/{id}")
        public ResponseEntity<String> deleteEmployee(@PathVariable Long id) {
                boolean deleted = employeeService.deleteEmployee(id);
                if (deleted) {
                        return ResponseEntity.ok("Employee record deleted");
                } else {
                        return ResponseEntity.status(404).body("Employee not found");
                }
        }

        @PutMapping("/{id}")
        public ResponseEntity<String> updateEmployee(@PathVariable Long id, @RequestBody Employee emp) {
                String result = employeeService.updateEmployee(id, emp);
                return result.equals("Update Successfully") ?
                        ResponseEntity.ok(result) :
                        ResponseEntity.status(404).body(result);
        }

        @GetMapping("/read/empid/{employeeId}")
        public ResponseEntity<Employee> getEmployeeByEmployeeId(@PathVariable String employeeId){
                EmployeeEntity entity = employeeService.readEmployeeByEmployeeId(employeeId);
                System.out.println(entity); // ✅ this is correct

                if (entity == null) {
                        return ResponseEntity.notFound().build();
                }

                Employee emp = new Employee();
                emp.setId(entity.getId());
                emp.setEmployeeId(entity.getEmployeeId());
                emp.setName(entity.getName());
                emp.setEmail(entity.getEmail());
                emp.setPhone(entity.getPhone());
                emp.setDepartment(entity.getDepartment());
                emp.setDesignation(entity.getDesignation());
                emp.setAddress(entity.getAddress());
                emp.setDob(entity.getDob());
                emp.setJoiningDate(entity.getJoiningDate());
                emp.setSalary(entity.getSalary());
                emp.setStatus(entity.getStatus());
                emp.setManager(entity.getManager());
                emp.setSkills(entity.getSkills());
                emp.setExperience(entity.getExperience());
                emp.setEducation(entity.getEducation());
                emp.setCertifications(entity.getCertifications());
                emp.setProjects(entity.getProjects());
                emp.setLanguages(entity.getLanguages());
                emp.setImageBase64(entity.getImageData() != null ?
                        java.util.Base64.getEncoder().encodeToString(entity.getImageData()) : null);

                System.out.println(emp); // ✅ move this here after setting all fields

                return ResponseEntity.ok(emp);
        }


}
