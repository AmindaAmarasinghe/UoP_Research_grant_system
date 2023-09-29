package com.researchGrant.backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "staff_grant")
@Data
public class Staff_Grant {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id")
    private int id;

    @Column(name = "staff_id")
    private int staff_id;

    @Column(name = "grant_id")
    private int grant_id;

    @Column(name = "type")
    private int type;

    @Column(name = "salary")
    private double salary;

    @Column(name = "duration")
    private String duration;

    @Column(name = "course_fee")
    private double course_fee;

    @Column(name = "other_benefits")
    private String other_benefits;
}
