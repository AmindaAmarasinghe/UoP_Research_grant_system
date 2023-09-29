package com.researchGrant.backend.entity;
import org.springframework.data.annotation.Id;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "grant")
@Data
public class Grant {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "grant_id")
    private int grant_id;

    @Column(name = "grantee_id")
    private int grantee_id;

    @Column(name = "granter_id")
    private int granter_id;

    @Column(name = "faculty_id")
    private int faculty_id;

    public Grant(int grant_id, int grantee_id, int granter_id, int faculty_id) {
        this.grant_id = grant_id;
        this.grantee_id = grantee_id;
        this.granter_id = granter_id;
        this.faculty_id = faculty_id;
    }
}
