import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BlogpostService } from '../blogpost.service';
import { Blogpost } from '../blogpost';

@Component({
  selector: 'app-blogpost-detail',
  templateUrl: './blogpost-detail.component.html',
  styleUrls: ['./blogpost-detail.component.css']
})
export class BlogpostDetailComponent implements OnInit {

  blogpost: Blogpost;

  constructor(private route: ActivatedRoute, private blogpostService: BlogpostService) { }

  ngOnInit() {
    this.getPost();
  }

  getPost(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log("The blogpost id: " + id);
    this.blogpostService.getPost(id)
      .subscribe(post => {
        console.log("The blogpost post: " + post.title);
        this.blogpost = post;
      });
  }

  editPost() {
    console.log("Edit post!!");
  }

  deletePost() {
    console.log("Delete post!!");
  }

}
