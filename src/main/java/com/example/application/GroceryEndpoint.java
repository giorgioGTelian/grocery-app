package com.example.application;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import javax.annotation.Nonnull;

import com.vaadin.flow.server.auth.AnonymousAllowed;

import dev.hilla.Endpoint;

@Endpoint   // Marks this class as a Spring Web Service endpoint
@AnonymousAllowed // Allow anonymous access to this endpoint
public class GroceryEndpoint {

    private GroceryRepository repo;

    public GroceryEndpoint(GroceryRepository repo) {
        this.repo = repo;
    }
    public @Nonnull List<@Nonnull GroceryItem> findAll() {
        return repo.findAll();
    }
    public GroceryItem save(GroceryItem item) {
        return repo.save(item);
    }

    public String greet(String message) {
        return "The server says: " + message;
    }
}
