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
  counter = 0;
  result = 4;
  finalResult = '';
  username = 'shahi-frontend';
  myFavLang = {
    'frontend' : ['html', 'css', 'javascript'],
    'backend' : ['nodejs', 'ruby', 'python']
  };
  myLang = [
    {'name': 'html', 'type': 'frontend'},
    {'name': 'css', 'type': 'frontend'},
    {'name': 'js', 'type': 'frontend'},
    {'name': 'ruby', 'type': 'backend'},
  ];
  onClicked(value: string) {
    this.childText = value;
  }

  toggleDiv() {
    this.counter++;
    // this.visible = !this.visible;
  }

  myFunction(event) {
    this.finalResult = event.target.value;
  }
}
