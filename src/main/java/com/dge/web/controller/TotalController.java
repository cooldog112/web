package com.dge.web.controller;

import com.dge.web.domain.Report;
import com.dge.web.domain.Total;
import com.dge.web.service.TotalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TotalController {
    @Autowired
    TotalService totalService;

    @GetMapping(value = "/total")
    public List<Total> findAll() {
        return totalService.findAll();
    }

    @GetMapping(value = "/report/year")
    public Total findByYear(@Param("year") int year) {
        return totalService.findByYear(year);
    }

    @GetMapping(value = "/currentTotal")
    public List<Total> findCurrentTotal() {
        return totalService.currentTotal();
    }



}
