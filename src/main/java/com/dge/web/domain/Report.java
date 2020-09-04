package com.dge.web.domain;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
public class Report {
    private Long id;
    private Long userId;
    private String position;
    private String name;
    private String error;
    private String content;
    private LocalDateTime created;
    private LocalDateTime updated;
}
