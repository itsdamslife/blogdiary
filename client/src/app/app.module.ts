import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BlogpostsComponent } from './blogposts/blogposts.component';

import { BlogpostService } from './blogpost.service';
import { CreateBlogpostComponent } from './create-blogpost/create-blogpost.component';
import { AppRoutingModule } from './/app-routing.module';
import { BlogpostDetailComponent } from './blogpost-detail/blogpost-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogpostsComponent,
    CreateBlogpostComponent,
    BlogpostDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ BlogpostService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
