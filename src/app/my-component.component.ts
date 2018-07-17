import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  @Output() clicked = new EventEmitter<string>();
  childClick() {
    this.clicked.emit('This is the child text.');
  }
  constructor() { }

  ngOnInit() {
  }

}
