package com.example.springoneshot.SpringProjectDemo;

import jakarta.persistence.PostUpdate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EmpController {
//        List<Employee> employeeList = new ArrayList<>();
        @Autowired
        private EmployeeService employeeService;
        @GetMapping("/Display")
        public List<Employee> getAllEmployee(){
//                employeeList.add(null);
//                Employee emp1 = new Employee(1,"omraje","8799911512","Omraje@gmail.com");
//                Employee emp2 = new Employee(2,"vinay","91977367834","Vinay@gmail.com");
//                employeeList.add(emp1);
//                employeeList.add(emp2);

                return employeeService.readEmployee();
        }
        @PostMapping("/Register")
        public String createEmployee(@RequestBody Employee emp){
//                employeeList.add(emp);
                System.out.println(emp);
                return employeeService.createEmployee(emp);
        }
        @DeleteMapping("/Delete/{id}")
        public String deleteEmployee(@PathVariable int id){
                if(employeeService.deleteEmployee(id)) {
                        return "employee record deleted";
                }else {
                        return "Not Found";
                }
        }
        @PutMapping("/Update/{id}")
        public String updateEmployee(@PathVariable int id,@RequestBody Employee emp){
                return employeeService.updateEmployee(id,emp);
        }
}
