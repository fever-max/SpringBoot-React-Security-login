package com.study.back.model;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.CreationTimestamp;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id // primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int no;
    private String username;
    private String password;
    private String userEmail;
    private String role; // ROLE_USER, ROLE_ADMIN

    // OAuth2 구분
    private String provider;
    private String providerId;

    @CreationTimestamp
    private Timestamp createDate;
}
