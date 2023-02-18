import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
declare var window: any;

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  constructor() { }
  formModel: any;

  ngOnInit(): void {

    this.formModel = new window.bootstrap.Modal(
      document.getElementById("exampleModal")

    );
  }

  openModal() {
    this.formModel.show();
  }
  CloseModal() {
    this.formModel.hide();
  }

}
