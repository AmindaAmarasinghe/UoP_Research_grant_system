package com.researchGrant.backend.entity;

import org.springframework.data.annotation.Id;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "grantee")
@Data
public class Grantee {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "grantee_id")
    private int grantee_id;

    @Column(name = "name")
    private String name;

    @Column(name = "workspace_id")
    private int workspace_id;

    @Column(name = "post_id")
    private int post_id;

    @Column(name = "email")
    private String email;

    @Column(name = "phone")
    private String phone;

    @Column(name = "password")
    private String password;

    public Grantee(int grantee_id, String name, int workspace_id, int post_id, String email, String phone,
            String password) {
        this.grantee_id = grantee_id;
        this.name = name;
        this.workspace_id = workspace_id;
        this.post_id = post_id;
        this.email = email;
        this.phone = phone;
        this.password = password;
    }

}
