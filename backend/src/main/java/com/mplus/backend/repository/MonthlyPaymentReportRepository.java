package com.mplus.backend.repository;

import com.mplus.backend.entity.MonthlyPaymentReport;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MonthlyPaymentReportRepository extends JpaRepository<MonthlyPaymentReport, Integer> {
}
