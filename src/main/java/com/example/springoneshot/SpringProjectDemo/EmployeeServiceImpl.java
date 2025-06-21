package com.example.springoneshot.SpringProjectDemo;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository repository;


    @Override
    public String createEmployee(Employee emp, MultipartFile image) throws IOException {
        EmployeeEntity entity = new EmployeeEntity();
        entity.setImageData(image.getBytes());
        BeanUtils.copyProperties(emp, entity);
        repository.save(entity);
        return "Employee saved Successfully";
    }
    @Override
    public EmployeeEntity readEmployeeByEmployeeId(String employeeId) {
        return repository.findByEmployeeId(employeeId);
    }



    @Override
    public List<Employee> readEmployee() {
        List<EmployeeEntity> entityList = repository.findAll();
        List<Employee> employeeList = new ArrayList<>();

        for (EmployeeEntity i : entityList) {
            Employee employee = new Employee();

            // ✅ Set the DB entity ID
            employee.setId(i.getId());  // <-- this line is missing in your code

            employee.setEmployeeId(i.getEmployeeId());
            employee.setName(i.getName());
            employee.setEmail(i.getEmail());
            employee.setPhone(i.getPhone());
            employee.setDepartment(i.getDepartment());
            employee.setDesignation(i.getDesignation());
            employee.setAddress(i.getAddress());
            employee.setDob(i.getDob());
            employee.setJoiningDate(i.getJoiningDate());
            employee.setSalary(i.getSalary());
            employee.setStatus(i.getStatus());
            employee.setManager(i.getManager());
            employee.setSkills(i.getSkills());
            employee.setExperience(i.getExperience());
            employee.setEducation(i.getEducation());
            employee.setCertifications(i.getCertifications());
            employee.setProjects(i.getProjects());
            employee.setLanguages(i.getLanguages());
            employee.setImageData(i.getImageData()); // Optional: if you want to show imageBase64

            employeeList.add(employee);
        }

        return employeeList;
    }



    @Override
    public boolean deleteEmployee(long id) {
        return repository.findById((int) id).map(e -> {
            repository.delete(e);
            return true;
        }).orElse(false);
    }


    @Override
    public String updateEmployee(long id, Employee employee) {
        EmployeeEntity emp = repository.findById((int) id).orElse(null);
        if (emp != null) {
            emp.setEmployeeId(employee.getEmployeeId());
            emp.setName(employee.getName());
            emp.setEmail(employee.getEmail());
            emp.setPhone(employee.getPhone());
            emp.setDepartment(employee.getDepartment());
            emp.setDesignation(employee.getDesignation());
            emp.setAddress(employee.getAddress());
            emp.setDob(employee.getDob());
            emp.setJoiningDate(employee.getJoiningDate());
            emp.setSalary(employee.getSalary());
            emp.setStatus(employee.getStatus());
            emp.setManager(employee.getManager());
            emp.setSkills(employee.getSkills());
            emp.setExperience(employee.getExperience());
            emp.setEducation(employee.getEducation());
            emp.setCertifications(employee.getCertifications());
            emp.setProjects(employee.getProjects());
            emp.setLanguages(employee.getLanguages());
            // Save the updated entity
            repository.save(emp);
            return "Update Successfully";
        } else {
            return "Employee not found";
        }
    }


}
