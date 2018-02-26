import { Component, OnInit } from '@angular/core';
import { Blogpost } from '../blogpost'
import { BLOGPOSTS } from '../mock_blogposts';

@Component({
  selector: 'app-blogposts',
  templateUrl: './blogposts.component.html',
  styleUrls: ['./blogposts.component.css']
})
export class BlogpostsComponent implements OnInit {

  blogpost: Blogpost = {
    id: 1,
    title: 'Learning Angular',
    description: 'Learn angular building a webapp',
    publishedDate: 'Feb 10 2018'
  };

  posts: Blogpost[] = BLOGPOSTS;

  constructor() { }

  ngOnInit() {
  }

}
