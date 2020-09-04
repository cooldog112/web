package com.dge.web.service;

import com.dge.web.domain.Report;
import com.dge.web.domain.ReportMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReportServiceImpl implements com.dge.web.service.ReportService {

    @Autowired
    ReportMapper reportMapper;

    @Override
    public List<Report> findAll() {
        return reportMapper.findAll();
    }

    @Override
    public Long add(Report report) {
        return reportMapper.add(report);
    }

    @Override
    public Report findById(Long id) {
        return reportMapper.findById(id);
    }

    @Override
    public List<Report> findByUserId(Long userId) {
        return reportMapper.findByUserId(userId);
    }

}
