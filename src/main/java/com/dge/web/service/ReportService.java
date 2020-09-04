package com.dge.web.service;




import com.dge.web.domain.Report;

import java.util.List;

public interface ReportService {
    List<Report> findAll();
    Long add(Report report);
    Report findById(Long id);
    List<Report> findByUserId(Long userId);
}
