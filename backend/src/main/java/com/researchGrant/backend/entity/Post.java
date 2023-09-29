package com.researchGrant.backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "post")
@Data
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "post_id")
    private int post_id;

    @Column(name = "post_name")
    private String post_name;
    
    public Post(int post_id, String post_name) {
        this.post_id = post_id;
        this.post_name = post_name;
    }
}
