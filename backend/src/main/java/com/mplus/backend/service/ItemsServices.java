package com.mplus.backend.service;

import com.mplus.backend.entity.ItemsCompleted;
import com.mplus.backend.entity.MonthlyPaymentReport;
import com.mplus.backend.entity.ToDateQuantities;
import com.mplus.backend.repository.ItemsRepository;
import com.mplus.backend.repository.MonthlyPaymentReportRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ItemsServices {
    private final MonthlyPaymentReportRepository monthlyPaymentReportRepository;
    private final ItemsRepository itemsRepository;

    public ItemsServices(MonthlyPaymentReportRepository monthlyPaymentReportRepository, ItemsRepository itemsRepository) {
        this.monthlyPaymentReportRepository = monthlyPaymentReportRepository;
        this.itemsRepository = itemsRepository;
    }
    public List<MonthlyPaymentReport> findAllMonthlyPayments() {
        return monthlyPaymentReportRepository.findAll();
    }
    public List<ToDateQuantities> getToDateQuantityServices(){
        List<ToDateQuantities> toDateQuantitiesList = new ArrayList<>();
        for (MonthlyPaymentReport quantity : findAllMonthlyPayments()) {
            toDateQuantitiesList.add(new ToDateQuantities(quantity.getItem(), quantity.getTo_date_quantity()));
        }
        return toDateQuantitiesList;
    }
    public ItemsCompleted saveItemsCompleted(ItemsCompleted itemsCompleted){
        return itemsRepository.save(itemsCompleted);
    }
}
