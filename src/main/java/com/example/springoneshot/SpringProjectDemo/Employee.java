package com.example.springoneshot.SpringProjectDemo;

public class Employee {
    private int id;
    private String name;
    private String phone;
    private String email;

    public Employee(){};
    public Employee(int id,String name,String phone,String email){
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
    };

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }
    public void setName(String name){
        this.name = name;  // ✅ Correct
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

    @Override
    public String toString() {
        return "Employee{Id: "+this.id+"Name: "+this.name+"Phone: "+this.phone+"Email: "+this.email+"}";
    }

}
