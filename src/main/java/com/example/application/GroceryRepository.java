package com.example.application;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;

public interface GroceryRepository extends JpaRepository<GroceryItem, UUID>{
    
    
}
