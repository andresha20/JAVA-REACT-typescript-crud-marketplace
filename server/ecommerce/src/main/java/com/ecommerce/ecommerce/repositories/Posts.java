package com.ecommerce.ecommerce.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.ecommerce.ecommerce.models.Post;

import java.util.List;

public interface Posts extends MongoRepository<Post, String> {
    public List<Post> findByCategory(Number category);
    public List<Post> findByStatus(Number status);
    public List<Post> findByYear(Number year);
    public Post findByBrand(Number brand);

}
