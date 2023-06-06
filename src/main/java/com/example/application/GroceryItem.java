package com.example.application;
import java.util.UUID;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;



@jakarta.persistence.Entity
public class GroceryItem {
    @Id
    @GeneratedValue
    private UUID id;

    @NotBlank(message = "Name is mandatory")
    private String name;

    @Min(value = 0, message = "Quantity must be positive")
    private int quantity;
    
    public UUID getId() {
        return id;
    }
    public void setId(UUID id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
