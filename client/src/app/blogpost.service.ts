import { Injectable } from '@angular/core';

import { Blogpost } from './blogpost';
import { BLOGPOSTS } from './mock_blogposts';

@Injectable()
export class BlogpostService {

  constructor() { }

  getPosts() {
    return BLOGPOSTS;
  }

  addPost(blogpost: Blogpost) {
    // add to the top of the list
    BLOGPOSTS.unshift(blogpost);
  }
  
}
