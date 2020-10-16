package com.dge.web.service;





import com.dge.web.domain.Separate;

import java.util.List;

public interface SeparateService {
    List<Separate> findAll();
    Long add(Separate separate);
    Separate findById(Long id);
    List<Separate> findByUserId(Long userId);
    Separate get(Separate separate);
}
