import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Blogpost } from './blogpost';
import { BLOGPOSTS } from './mock_blogposts';

@Injectable()
export class BlogpostService {

  constructor() { }

  getPosts(): Observable<Blogpost[]> {
    if (typeof (Storage) !== "undefined") {
      var bps = localStorage.getItem("blogposts");
      // console.log(" blogposts from local storage : \n" + bps);
      var bpsArray: Blogpost[] = JSON.parse(bps);
      return of(bpsArray);
    } else {
      console.log("Sorry! No Web Storage support..");
    }
    return of(BLOGPOSTS);
  }

  addPost(blogpost: Blogpost) {
    // add to the top of the list
    // BLOGPOSTS.unshift(blogpost);
    if (typeof (Storage) !== "undefined") {
      var bps = localStorage.getItem("blogposts");
      // console.log(" blogposts from local storage : \n" + bps);
      var bpsArray: Blogpost[] = JSON.parse(bps);
      bpsArray.unshift(blogpost);
      localStorage.setItem("blogposts", JSON.stringify(bpsArray));
    } else {
      console.log("Sorry! No Web Storage support..");
    }
  }
  
}
