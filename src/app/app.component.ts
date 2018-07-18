import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  childText = '';
  visible = true;
  onClicked(value: string) {
    this.childText = value;
  }

  toggleDiv() {
    this.visible = !this.visible;
  }
}
