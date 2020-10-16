package com.dge.web.domain;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface SeparateMapper {
    List<Separate> findAll();
    Long add(Separate separate);
    Separate findById(@Param("id") Long id);
    List<Separate> findByUserId(@Param("userId") Long userId);
    Separate get(Separate separate);
}
