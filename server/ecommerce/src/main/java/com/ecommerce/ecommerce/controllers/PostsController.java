package com.ecommerce.ecommerce.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;

import com.ecommerce.ecommerce.models.Post;
import com.ecommerce.ecommerce.repositories.Posts;

import java.util.List;
import java.util.ArrayList;
import java.util.Map;

import jakarta.validation.Valid;;

@CrossOrigin
@RestController
@RequestMapping("/api/posts")

public class PostsController {
    @Autowired
    private Posts postsRepository;

    @GetMapping("filter")
    List<Post> index(@RequestParam Map<String, String> params) {
        List<Post> result = new ArrayList<Post>();
        if (params.entrySet().size() > 0) {
            System.out.println("ran");
            for (Map.Entry<String, String> entry: params.entrySet()) {

                String key = entry.getKey();
                System.out.println(key);

                String value = entry.getValue();
                switch (key) {
                    case "category":
                        result = postsRepository.findByCategory(Integer.parseInt(value));
                        break;
                    case "condition":
                        result = postsRepository.findByCondition(Integer.parseInt(value));
                        break;
                    case "year":
                        result = postsRepository.findByYear(Integer.parseInt(value));
                        break;
                    case "brand":
                        result = postsRepository.findByBrand(Integer.parseInt(value));
                        break;
                    case "id":
                        result = postsRepository.findById(value).stream().toList();;
                        break;
                
                    default:
                        break;
                }
            }
        } else {
            System.out.println("ran 2");

            return postsRepository.findAll();
        }
        return result;
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("")
    Post create(@RequestBody @Valid Post post) {
        return postsRepository.save(post);
    }

    @PutMapping("{id}")
    Post update(@PathVariable String id, @RequestParam Map<String, String> params, @RequestBody @Valid Post post) {
        Post postFromDB = postsRepository
        .findById(id)
        .orElseThrow(RuntimeException::new);   
        post.setId(id);
        System.out.print("POST" + post); 
        postFromDB = post;
        return postsRepository.save(postFromDB);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("{id}")
    void delete(@PathVariable String id) {
        Post postFromDB = postsRepository
                .findById(id)
                .orElseThrow(RuntimeException::new);
        postsRepository.delete(postFromDB);
    }

}
