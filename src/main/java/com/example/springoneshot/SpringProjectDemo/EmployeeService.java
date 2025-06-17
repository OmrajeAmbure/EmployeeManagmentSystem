package com.example.springoneshot.SpringProjectDemo;

import java.util.List;

public interface EmployeeService {
    String createEmployee(Employee emp);
    List<Employee> readEmployee();
    boolean deleteEmployee(int id);
    String updateEmployee(int id,Employee emp);
}
