package com.dge.web.service;

import com.dge.web.domain.Separate;
import com.dge.web.domain.SeparateMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SeparateServiceImpl implements SeparateService {

    @Autowired
    SeparateMapper separateMapper;

    @Override
    public List<Separate> findAll() {
        return separateMapper.findAll();
    }

    @Override
    public Long add(Separate separate) {
        return separateMapper.add(separate);
    }

    @Override
    public Separate findById(Long id) {
        return separateMapper.findById(id);
    }

    @Override
    public List<Separate> findByUserId(Long userId) {
        return separateMapper.findByUserId(userId);
    }

    @Override
    public Separate get(Separate separate){
        return separateMapper.get(separate);
    }
}
