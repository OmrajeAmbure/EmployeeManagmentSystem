package com.example.springoneshot.SpringProjectDemo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<EmployeeEntity, Integer> {
    EmployeeEntity findByEmployeeId(String employeeId);

}
