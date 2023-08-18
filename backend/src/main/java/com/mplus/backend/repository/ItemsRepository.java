package com.mplus.backend.repository;

import com.mplus.backend.entity.ItemsCompleted;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemsRepository extends JpaRepository<ItemsCompleted, Integer> {
}
