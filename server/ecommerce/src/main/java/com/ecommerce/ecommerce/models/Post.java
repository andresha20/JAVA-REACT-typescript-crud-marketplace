package com.ecommerce.ecommerce.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
@Document
public class Post {
    @Id
    private String id;

    @NotEmpty
    private String model;
    private String postName;
    private String color;
    private String location;
    private String imgUrl;
    private Number transmission;
    private Number brand;
    private Number category;
    private Number year;
    private Number price;
    private Number mileage;
    private Number fuelType;
    private Number mileageType;
    private Number cylinders;
    private Number appraisal;
    private Number condition;
    
    
    @NotNull
    private Boolean negotiable;
    private Boolean exchange;
    private Boolean bulletproof;

    @NotEmpty
    @Size(min = 2, message = "{validation.name.size.too_short}")
    @Size(max = 200, message = "{validation.name.size.too_long}")
    private String description;
}
