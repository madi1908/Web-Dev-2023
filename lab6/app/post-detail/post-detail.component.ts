import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { POSTS } from '../fake-db';
import { Post } from '../module';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit{
  post:Post;
  postService: any;
  loaded:boolean;

  constructor(private route: ActivatedRoute){
    this.post = {} as Post;
    this.loaded = true;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap) => {
      const id = Number(params.get('id'));
      // this.post = POSTS.find((post: Post) => post.id === id) as Post;
      this.postService.getPost(id).subscribe((post:Post)=>{
        this.post=post;
      })
    })
  }
}

