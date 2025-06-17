package com.example.springoneshot.SpringProjectDemo;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {
    @Autowired
    EmployeeRepository repository;
//    List<Employee> employeeList = new ArrayList<>();
    @Override
    public String createEmployee(Employee emp) {
        EmployeeEntity entity = new EmployeeEntity();
        BeanUtils.copyProperties(emp,entity);
        repository.save(entity);
//        employeeList.add(emp);
        return "Employee saved Successfully";
    }

    @Override
    public List<Employee> readEmployee() {
        List<EmployeeEntity> entityList = repository.findAll();
        List<Employee> employeeList = new ArrayList<>();
        for (EmployeeEntity i:entityList) {
            Employee employee = new Employee();
            employee.setId(i.getId());
            employee.setName(i.getName());
            employee.setEmail(i.getEmail());
            employee.setPhone(i.getPhone());
            employeeList.add(employee);
        }
        return employeeList;
    }

    @Override
    public boolean deleteEmployee(int id) {
//        employeeList.remove(id);
        EmployeeEntity emp = repository.findById(id).get();
        repository.delete(emp);
        return true;
    }

    @Override
    public String updateEmployee(int id, Employee employee) {
        EmployeeEntity emp = repository.findById(id).orElse(null);

        if (emp != null) {
            emp.setName(employee.getName());
            emp.setEmail(employee.getEmail());
            emp.setPhone(employee.getPhone());

            // Save the updated entity
            repository.save(emp);

            return "Update Successfully";
        } else {
            return "Employee not found";
        }
    }

}
