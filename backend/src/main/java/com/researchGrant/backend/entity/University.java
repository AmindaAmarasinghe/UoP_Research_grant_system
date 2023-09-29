package com.researchGrant.backend.entity;

import jakarta.persistence.*;

public class University {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id")
    private int university_id;

    @Column(name = "university_name")
    private String university_name;

    public University(int university_id, String university_name) {
        this.university_id = university_id;
        this.university_name = university_name;
    }
}
