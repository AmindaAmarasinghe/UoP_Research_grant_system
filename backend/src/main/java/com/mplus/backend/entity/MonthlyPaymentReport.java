package com.mplus.backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "monthly_payment_report")
@Data
public class MonthlyPaymentReport {

    @Id
    @Column(name = "item")
    private int item;

    @Column(name = "description")
    private String description;

    @Column(name = "measured_unit")
    private String measured_unit;

    @Column(name = "quantity")
    private float quantity;

    @Column(name = "unit_price")
    private float unit_price;

    @Column(name = "amount")
    private float amount;

    @Column(name = "prev_quantity")
    private float prev_quantity;

    @Column(name = "prev_amount")
    private float prev_amount;

    @Column(name = "this_quantity")
    private float this_quantity;

    @Column(name = "this_amount")
    private float this_amount;

    @Column(name = "to_date_quantity")
    private float to_date_quantity;

    @Column(name = "to_date_amount")
    private float to_date_amount;

    public MonthlyPaymentReport() {
    }

    public MonthlyPaymentReport(int item, String description, String measured_unit, float quantity, float unit_price, float amount, float prev_quantity, float prev_amount, float this_quantity, float this_amount, float to_date_quantity, float to_date_amount) {
        this.item = item;
        this.description = description;
        this.measured_unit = measured_unit;
        this.quantity = quantity;
        this.unit_price = unit_price;
        this.amount = amount;
        this.prev_quantity = prev_quantity;
        this.prev_amount = prev_amount;
        this.this_quantity = this_quantity;
        this.this_amount = this_amount;
        this.to_date_quantity = to_date_quantity;
        this.to_date_amount = to_date_amount;
    }
}
