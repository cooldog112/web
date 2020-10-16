package com.dge.web.domain;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
public class Separate {
    private Long id;
    private Long userId;
    private Long period;
    //응시자
    private Long applicant;

    private LocalDateTime created;
    private LocalDateTime updated;
}
