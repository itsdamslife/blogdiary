import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Blogpost } from '../blogpost';

@Component({
  selector: 'app-create-blogpost',
  templateUrl: './create-blogpost.component.html',
  styleUrls: ['./create-blogpost.component.css']
})
export class CreateBlogpostComponent implements OnInit {

  blogpost: Blogpost = {
    id: 12345,
    title: "",
    description: "",
    publishedDate: ""
  }

  constructor() { }

  ngOnInit() {
  }

  cancel() {
    console.log("Cancelled!! ");
  }

  save() {
    this.blogpost.publishedDate = "" + Date.now();
    console.log("Saved!!\n"+this.blogpost.title);
    console.log("\n" + this.blogpost.description);
    console.log("\n" + this.blogpost.publishedDate);
  }

}
