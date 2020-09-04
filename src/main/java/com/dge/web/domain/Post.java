package com.dge.web.domain;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
public class Post {
    private Long id;
    private Long userId;
    private Long category;
    private String title;
    private String content;
    private Long views;
    private Long likes;
    private LocalDateTime created;
    private LocalDateTime updated;
}
