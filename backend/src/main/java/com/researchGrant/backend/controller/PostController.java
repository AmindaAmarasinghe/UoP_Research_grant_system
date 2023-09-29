package com.researchGrant.backend.controller;

import com.researchGrant.backend.entity.Post;
import com.researchGrant.backend.service.PostServices;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="/api/v1")
public class PostController {
    private final PostServices postServices;

    public PostController(PostServices postServices) {
        this.postServices = postServices;
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(value="/get_posts",produces="application/json")
    public List<Post> getPosts(){
        return postServices.getPosts();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(value="/set_post")
    public Post savePost(@RequestBody Post post) {
        return postServices.savePost(post);
    }
}
