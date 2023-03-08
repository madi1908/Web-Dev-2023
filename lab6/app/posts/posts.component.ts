import { Component, OnInit } from '@angular/core';
import { POSTS } from '../fake-db';
import { Post } from '../module';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  posts:Post[];
  
  constructor(private postService:PostService ){
    this.posts = [];
  }
  ngOnInit(): void {
   this.postService.getPosts().subscribe((posts:Post[])=>{
    this.posts = posts;
   })

    // this.posts = POSTS;  
  }
  
}
