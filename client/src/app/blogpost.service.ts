import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Blogpost } from './blogpost';
import { BLOGPOSTS } from './mock_blogposts';

@Injectable()
export class BlogpostService {

  constructor() { }

  getPosts(): Observable<Blogpost[]> {
    return of(BLOGPOSTS);
  }

  addPost(blogpost: Blogpost) {
    // add to the top of the list
    BLOGPOSTS.unshift(blogpost);
  }
  
}
