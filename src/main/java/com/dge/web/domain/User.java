package com.dge.web.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
public class User {
    //PK
    private Long id;
    //학교명
    private String account;
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;
    //시험실 수
    private int testRoomNum;
    //지원자 수
    private int applicantNum;

    private String storedPath;
    private String originalName;
    private LocalDateTime created;
    private LocalDateTime updated;
}
