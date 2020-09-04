package com.dge.web.controller;



import com.dge.web.domain.Post;
import com.dge.web.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PostController {
    @Autowired
    PostService postService;

    @GetMapping(value = "/api/post")
    public List findAll() {
        return postService.findAll();
    }

    @GetMapping(value = "/api/post/views")
    public List<Post> findAllByViews() {
        return postService.findAllByViews();
    }

    @GetMapping(value = "/api/post/likes")
    public List<Post> findAllByLikes() {
        return postService.findAllByLikes();
    }

    @GetMapping(value = "/api/post/id")
    public Post findById(@Param("id") Long id) {
        return postService.findById(id);
    }

    @GetMapping(value = "/api/post/category")
    public List<Post> findByCategory(@Param("category") Long category) {
        return postService.findByCategory(category);
    }

    @GetMapping(value = "/api/post/userId")
    public List<Post> findByUserId(@Param("userId") Long userId) {
        return postService.findByUserId(userId);
    }

    @PostMapping(value = "/api/post")
    public Long add(@RequestBody Post post) {
        return postService.add(post);
    }

    @PutMapping(value = "/api/post")
    public int modify(@RequestBody Post post) {
        return postService.modify(post);
    }

    @PutMapping(value = "/api/post/views")
    public int modifyByViews(@RequestBody Post post) {
        return postService.modifyByViews(post);
    }

    @PutMapping(value = "/api/post/likes")
    public int modifyByLikes(@RequestBody Post post) {
        return postService.modifyByLikes(post);
    }

    @DeleteMapping(value = "/api/post")
    public int deleteById(@Param("id") Long id) {
        return postService.deleteById(id);
    }
}
