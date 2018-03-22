import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { CommentService } from './comment.service';
import { MovieService } from './movie.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieEntryComponent } from './movie-entry/movie-entry.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent,
    MovieEntryComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    CommentService,
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
