package com.researchGrant.backend.entity;

import org.springframework.data.annotation.Id;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "staff")
@Data
public class Staff {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "NIC")
    private String nic;

    @Column(name = "name")
    private String name;

    @Column(name = "pf_no")
    private int pf_no;

    @Column(name = "workplace_id")
    private int workplace_id;

    @Column(name = "university_id")
    private int university_id;

    @Column(name = "post_id")
    private int post_id;

    @Column(name = "email")
    private String email;

    @Column(name = "phone")
    private String phone;

    public Staff(String nic, String name, int workplace_id, int post_id, String email, String phone) {
        this.nic = nic;
        this.name = name;
        this.workplace_id = workplace_id;
        this.post_id = post_id;
        this.email = email;
        this.phone = phone;
    }

    public Staff(String nic, String name, int pf_no, int workplace_id, int post_id, String email, String phone) {
        this.nic = nic;
        this.name = name;
        this.pf_no = pf_no;
        this.workplace_id = workplace_id;
        this.post_id = post_id;
        this.email = email;
        this.phone = phone;
    }

}
