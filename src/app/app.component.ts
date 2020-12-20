import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // This property is the application title and we want to give this data to the header.
  appTitle: string = 'Data Demo';
  childData: string;

  // A child component is emitting information for the parent to capture
  // We need a function / method to capture that data
  captureEmittedData(emittedData: string) {
    // console.log(emittedData);
    this.childData = emittedData;
  }
}
