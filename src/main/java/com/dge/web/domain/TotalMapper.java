package com.dge.web.domain;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface TotalMapper {
    List<Total> findAll();
    Total findByYear(@Param("year") int year);
    List<Total> currentTotal();
}
