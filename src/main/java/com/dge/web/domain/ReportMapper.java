package com.dge.web.domain;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface ReportMapper {
    List<Report> findAll();
    Long add(Report report);
    Report findById(@Param("id") Long id);
    List<Report> findByUserId(@Param("userId") Long userId);
}
