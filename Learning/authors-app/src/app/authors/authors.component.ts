import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent  {

  title = "Authors Information";
  authors;

  constructor(author: AuthorsService){
    this.authors = author.getAuthors();
  }

}
