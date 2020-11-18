package com.dge.web.controller;


import com.dge.web.domain.Person;
import com.dge.web.domain.Report;
import com.dge.web.service.PersonService;
import com.dge.web.service.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PersonController {
    @Autowired
    PersonService personService;

    @GetMapping(value = "/person")
    public List findAll() {
        return personService.findAll();
    }
    @GetMapping(value = "/person/id")
    public Person findById(@Param("id") Long id) {
        return personService.findById(id);
    }
    @PostMapping(value = "/person/userId")
    public List<Person> findByUserId(@RequestBody Person person) {
        return personService.findByUserId(person.getUserId());
    }
    @PostMapping(value = "/person/add")
    public Long add(@RequestBody Person person) {
        return personService.add(person);
    }
    @PostMapping(value = "/person/get")
    public Person get(@RequestBody Person person) {
        return personService.get(person);
    }



}
