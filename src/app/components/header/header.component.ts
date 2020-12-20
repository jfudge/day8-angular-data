import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  // The title property will get it's value from a component attribute
  @Input() title: string; // parent to child


  // Data that will be given to the parent component (app.component) - More complicated
  // Create an event emitter that will emit data
  // @Output() dataEmitter: EventEmitter<any> = new EventEmitter<any>(); // Means the same thing as below
  @Output() dataEmitter = new EventEmitter();

  // This is a property that will be sent to the parent
  dataForParent: string = 'Welcome to the app!'; // child to parent

  // Create a function that will use the event emitter that we created
  // to emit the data we want to send.
  emittingFunction() {
    // Run the emit function. The emit function will emit the data we pass into it
    this.dataEmitter.emit(this.dataForParent);
  }

  // Emitting data is a good example use of the ngOnInit()
  ngOnInit(): void {
    // Run the emitting function when the component initializes
    // and the data will be emitted and available for use outside the child
    this.emittingFunction();
  }

}
