package com.dge.web.domain;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface PersonMapper {
    List<Person> findAll();
    Long add(Person person);
    Person findById(@Param("id") Long id);
    List<Person> findByUserId(@Param("userId") Long userId);
    Person get(Person person);
}
