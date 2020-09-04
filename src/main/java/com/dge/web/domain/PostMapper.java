package com.dge.web.domain;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface PostMapper {
    List<Post> findAll();
    List<Post> findAllByViews();
    List<Post> findAllByLikes();
    int deleteById(@Param("id") Long id);
    Long add(Post post);
    int modify(Post post);
    int modifyByViews(Post post);
    int modifyByLikes(Post post);
    Post findById(@Param("id") Long id);
    List<Post> findByUserId(@Param("userId") Long userId);
    List<Post> findByCategory(@Param("category") Long category);
}
