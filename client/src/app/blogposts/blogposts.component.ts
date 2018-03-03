import { Component, OnInit } from '@angular/core';
import { Blogpost } from '../blogpost'
import { BlogpostService } from '../blogpost.service'

@Component({
  selector: 'app-blogposts',
  templateUrl: './blogposts.component.html',
  styleUrls: ['./blogposts.component.css']
})
export class BlogpostsComponent implements OnInit {

  title = 'Blogger Diary';
  description = 'This is my personal diary to journal my tech findings.';


  blogpost: Blogpost = {
    id: 1,
    title: 'Learning Angular',
    description: 'Learn angular building a webapp',
    publishedDate: 'Feb 10 2018'
  };

  posts: Blogpost[];

  constructor(private blogpostService: BlogpostService) { }

  ngOnInit() {
    this.updatePosts();
  }

  updatePosts() {
    this.blogpostService.getPosts()
      .subscribe(posts => {
        console.log("Subscribe method: " + posts.length);
        this.posts = posts;
      });
  }

  createNewPost() {
  }


}
