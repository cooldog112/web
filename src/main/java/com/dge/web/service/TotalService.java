package com.dge.web.service;




import com.dge.web.domain.Report;
import com.dge.web.domain.Total;
import org.springframework.stereotype.Service;

import java.util.List;

public interface TotalService {
    List<Total> findAll();
    Total findByYear(int year);
    List<Total> currentTotal();
}
