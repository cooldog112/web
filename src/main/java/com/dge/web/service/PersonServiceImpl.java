package com.dge.web.service;

import com.dge.web.domain.Person;
import com.dge.web.domain.PersonMapper;
import com.dge.web.domain.Report;
import com.dge.web.domain.ReportMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonServiceImpl implements PersonService {

    @Autowired
    PersonMapper personMapper;

    @Override
    public List<Person> findAll() {
        return personMapper.findAll();
    }

    @Override
    public Long add(Person person) {
        return personMapper.add(person);
    }

    @Override
    public Person findById(Long id) {
        return personMapper.findById(id);
    }

    @Override
    public List<Person> findByUserId(Long userId) {
        return personMapper.findByUserId(userId);
    }

    @Override
    public Person get(Person person){
        return personMapper.get(person);
    }
}
