package com.dge.web.domain;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
public class Person {
    private Long id;
    private Long userId;
    private Long period;
    //응시자
    private Long applicant;
    //지원자
    private Long candidate;
    //결시자
    private Long absentee;
    private LocalDateTime created;
    private LocalDateTime updated;
}
