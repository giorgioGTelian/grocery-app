package com.example.application;

import com.vaadin.flow.server.auth.AnonymousAllowed;

import dev.hilla.Endpoint;

@Endpoint   // Marks this class as a Spring Web Service endpoint
@AnonymousAllowed // Allow anonymous access to this endpoint
public class GroceryEndpoint {
    public String greet(String message) {
        return "The server says: " + message;
    }
}
