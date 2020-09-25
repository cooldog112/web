package com.dge.web.controller;



import com.dge.web.domain.Post;
import com.dge.web.domain.Report;
import com.dge.web.service.PostService;
import com.dge.web.service.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ReportController {
    @Autowired
    ReportService reportService;

    @GetMapping(value = "/report")
    public List findAll() {
        return reportService.findAll();
    }
    @GetMapping(value = "/report/id")
    public Report findById(@Param("id") Long id) {
        return reportService.findById(id);
    }
    @GetMapping(value = "/report/userId")
    public List<Report> findByUserId(@Param("userId") Long userId) {
        return reportService.findByUserId(userId);
    }
    @PostMapping(value = "/report/add")
    public Long add(@RequestBody Report report) {
        return reportService.add(report);
    }



}
