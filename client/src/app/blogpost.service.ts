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

  getPost(id): Observable<Blogpost> {
    if(typeof (Storage) !== "undefined") {
      var bps = localStorage.getItem("blogposts");
      // console.log(" blogposts from local storage : \n" + bps);
      var bpsArray: Blogpost[] = JSON.parse(bps);

      var i;
      for (i = 0; i < bpsArray.length; i++) {
        var bp: Blogpost = bpsArray[i];
        if(bp.id === id) {
          return of(bp);
        }
      } 
    } else {
      console.log("Sorry! No Web Storage support..");
    }
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

  updatePost(blogpost: Blogpost) {
    if (typeof (Storage) !== "undefined") {
      var bps = localStorage.getItem("blogposts");
      // console.log(" blogposts from local storage : \n" + bps);
      var bpsArray: Blogpost[] = JSON.parse(bps);

      var i;
      var bp: Blogpost;
      for (i = 0; i < bpsArray.length; i++) {
        bp = bpsArray[i];
        if (bp.id === blogpost.id) {
          bp.title = blogpost.title;
          bp.description = blogpost.description;
          break;
        }
      }
      bpsArray.splice(i, 1, bp);
      localStorage.setItem("blogposts", JSON.stringify(bpsArray));
    } else {
      console.log("Sorry! No Web Storage support..");
    }
  }

  deletePost(id) {
    if (typeof (Storage) !== "undefined") {
      var bps = localStorage.getItem("blogposts");
      // console.log(" blogposts from local storage : \n" + bps);
      var bpsArray: Blogpost[] = JSON.parse(bps);

      var i;
      for (i = 0; i < bpsArray.length; i++) {
        var bp: Blogpost = bpsArray[i];
        if (bp.id === id) {
          break;
        }
      }
      bpsArray.splice(i, 1);
      localStorage.setItem("blogposts", JSON.stringify(bpsArray));
    } else {
      console.log("Sorry! No Web Storage support..");
    }
  }
  
}
