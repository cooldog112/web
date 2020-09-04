package com.dge.web.service;


import com.dge.web.domain.Post;

import java.util.List;

public interface PostService {
    List<Post> findAll();
    List<Post> findAllByViews();
    List<Post> findAllByLikes();
    int deleteById(Long id);
    Long add(Post post);
    int modify(Post post);
    int modifyByViews(Post post);
    int modifyByLikes(Post post);
    Post findById(Long id);
    List<Post> findByUserId(Long userId);
    List<Post> findByCategory(Long category);
}
