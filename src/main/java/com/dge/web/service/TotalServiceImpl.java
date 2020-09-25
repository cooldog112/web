package com.dge.web.service;

import com.dge.web.domain.Report;
import com.dge.web.domain.ReportMapper;
import com.dge.web.domain.Total;
import com.dge.web.domain.TotalMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TotalServiceImpl implements TotalService {

    @Autowired
    TotalMapper totalMapper;

    @Override
    public List<Total> findAll() {
        return totalMapper.findAll();
    }


    @Override
    public Total findByYear(int year) {
        return totalMapper.findByYear(year);
    }
}
