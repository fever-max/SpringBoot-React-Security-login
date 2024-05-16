package com.study.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.study.back.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {

    User findByUserEmail(String userEmail);

}
