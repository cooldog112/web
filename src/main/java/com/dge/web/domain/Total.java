package com.dge.web.domain;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
public class Total {
    private Long id;
    private int year;
    private int period;
    private int applicant;
    private int absentee;
    private int candidate;
    private LocalDateTime created;
    private LocalDateTime updated;
}
