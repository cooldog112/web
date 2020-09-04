package com.dge.web.service;




import com.dge.web.domain.Person;
import com.dge.web.domain.Report;

import java.util.List;

public interface PersonService {
    List<Person> findAll();
    Long add(Person person);
    Person findById(Long id);
    List<Person> findByUserId(Long userId);
    Person get(Person person);
}
