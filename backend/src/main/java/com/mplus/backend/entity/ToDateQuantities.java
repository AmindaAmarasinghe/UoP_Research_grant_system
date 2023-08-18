package com.mplus.backend.entity;

import lombok.Data;

@Data
public class ToDateQuantities {
    private int item;
    private float to_date_quantity;

    public ToDateQuantities() {
    }

    public ToDateQuantities(int item, float to_date_quantity) {
        this.item = item;
        this.to_date_quantity = to_date_quantity;
    }
}
