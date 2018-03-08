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
  blogpostBeforeEditing: Blogpost = new Blogpost();
  isPostInEditMode: Boolean = false;

  constructor(private route: ActivatedRoute, private blogpostService: BlogpostService) { }

  ngOnInit() {
    this.getPost();
  }

  private switchToEditMode(shouldEdit: Boolean) {
    if (shouldEdit) {
      document.getElementById('titleField').removeAttribute('disabled');
      document.getElementById('blogpost').removeAttribute('disabled');
      document.getElementById('deleteButton').innerHTML = "Cancel";
      document.getElementById('editButton').innerHTML = "Save";
    } else {
      document.getElementById('titleField').setAttribute("disabled", "disabled");
      document.getElementById('blogpost').setAttribute("disabled", "disabled");
      document.getElementById('deleteButton').innerHTML = "Delete";
      document.getElementById('editButton').innerHTML = "Edit";
    }
  }

  private backUpPostDetails() {
    this.blogpostBeforeEditing.title = this.blogpost.title;
    this.blogpostBeforeEditing.description = this.blogpost.description;
  }

  private restoreBackUpPost() {
    this.blogpost.title = this.blogpostBeforeEditing.title;
    this.blogpost.description = this.blogpostBeforeEditing.description;
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

    if(this.isPostInEditMode == false) {
      this.backUpPostDetails();
      this.isPostInEditMode = true;
    } else {
      this.isPostInEditMode = false;
      // update the blogpost thru the service
    }
    this.switchToEditMode(this.isPostInEditMode);

  }

  deletePost() {
    console.log("Delete post!!");

    if (this.isPostInEditMode == true) {
      // Cancel operation
      console.log("old blog post = " + this.blogpostBeforeEditing.title);
      this.isPostInEditMode = false;
      this.restoreBackUpPost();
      this.blogpostBeforeEditing = new Blogpost();
    } else {
      // Delete operation
      this.isPostInEditMode = true;
      // Delete the post thru service
    }
    this.switchToEditMode(this.isPostInEditMode);
  }

}
