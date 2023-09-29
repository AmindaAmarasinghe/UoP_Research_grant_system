package com.researchGrant.backend.entity;

import org.springframework.data.annotation.Id;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "granter")
@Data
public class Granter {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "granter_id")
    private int granter_id;

    @Column(name = "name")
    private String name;

    @Column(name = "name_of_institute")
    private String name_of_institute;

    @Column(name = "email")
    private String email;

    @Column(name = "country")
    private String country;

    public Granter(int granter_id, String name, String name_of_institute, String email, String country) {
        this.granter_id = granter_id;
        this.name = name;
        this.name_of_institute = name_of_institute;
        this.email = email;
        this.country = country;
    }

}
