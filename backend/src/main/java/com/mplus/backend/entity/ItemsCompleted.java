package com.mplus.backend.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Date;

@Entity
@Table(name = "items_completed")
@Data
public class ItemsCompleted {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "record_no")
    private int record_no;


    @Column(name = "item")
    private int item;

    @Column(name = "updated_date")
    private String updated_date;

    @Column(name = "description")
    private String description;

    @Column(name = "locations")
    private String locations;

    @Column(name = "days_total")
    private float days_total;

    public ItemsCompleted() {
    }

    public ItemsCompleted(int record_no, int item, String updated_date, String description, String locations, float days_total) {
        this.record_no = record_no;
        this.item = item;
        this.updated_date = updated_date;
        this.description = description;
        this.locations = locations;
        this.days_total = days_total;
    }
}
