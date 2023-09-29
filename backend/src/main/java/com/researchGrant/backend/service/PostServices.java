package com.researchGrant.backend.service;


import com.researchGrant.backend.entity.Post;
import com.researchGrant.backend.repository.PostRepository;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostServices {
    private final PostRepository postRepository;

    public PostServices(PostRepository postRepository) {
        this.postRepository = postRepository;
    }
    public List<Post> getPosts(){
        return postRepository.findAll();
    }
    public Post savePost(Post post){
        return postRepository.save(post);
    }
}
