import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BlogpostService } from '../blogpost.service';
import { Blogpost } from '../blogpost';

@Component({
  selector: 'app-create-blogpost',
  templateUrl: './create-blogpost.component.html',
  styleUrls: ['./create-blogpost.component.css']
})
export class CreateBlogpostComponent implements OnInit {

  blogpost: Blogpost = {
    id: 0,
    title: "",
    description: "",
    publishedDate: ""
  }

  constructor(private blogpostService: BlogpostService) { }

  ngOnInit() {
  }

  cancel() {
    console.log("Cancelled!! ");
  }

  save() {
    this.blogpost.id = Date.now();
    this.blogpost.publishedDate = "" + this.blogpost.id;
    console.log("Saved!!\n"+this.blogpost.title);
    console.log("\n" + this.blogpost.description);
    console.log("\n" + this.blogpost.publishedDate);

    // Need to use a service to save it to mock blogpost list
    this.blogpostService.addPost(this.blogpost);
  }

}
