package com.example.springoneshot.SpringProjectDemo;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface EmployeeService {
    String createEmployee(Employee emp, MultipartFile image) throws IOException;
    List<Employee> readEmployee();
    boolean deleteEmployee(long id);
    String updateEmployee(long id, Employee emp);
    EmployeeEntity readEmployeeByEmployeeId(String employeeId);
}
