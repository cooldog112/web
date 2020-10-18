package com.dge.web.controller;



import com.dge.web.domain.Separate;

import com.dge.web.service.SeparateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SeparateController {
    @Autowired
    SeparateService separateService;

    @GetMapping(value = "/separate")
    public List findAll() {
        return separateService.findAll();
    }
    @GetMapping(value = "/separate/id")
    public Separate findById(@Param("id") Long id) {
        return separateService.findById(id);
    }

    @PostMapping(value = "/separate/add")
    public Long add(@RequestBody Separate separate) {
        Long n = separateService.add(separate);
        System.out.println("return value : " + n);
        return n;
    }
    @PostMapping(value = "/separate/get")
    public Separate get(@RequestBody Separate separate) {
        return separateService.get(separate);
    }

}
