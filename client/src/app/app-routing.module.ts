import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes } from '@angular/router'

import { BlogpostsComponent } from './blogposts/blogposts.component';
import { CreateBlogpostComponent } from './create-blogpost/create-blogpost.component';
import { BlogpostDetailComponent } from './blogpost-detail/blogpost-detail.component';

const routes: Routes = [
  { path: '', component: BlogpostsComponent },
  { path: 'newpost', component: CreateBlogpostComponent },
  { path: 'postdetail/:id', component: BlogpostDetailComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { 

}
