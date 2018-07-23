import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  firstName = '';
  age: number;
  found: boolean;
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

  constructor(private httpClient: HttpClient) {

  }
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

  onNameKeyUp(event) {
    this.firstName = event.target.value;
    this.found = false;
  }

  getProfile() {
    this.httpClient.get(`https://my-json-server.typicode.com/shahi-frontend/json-server/users/?firstName=${this.firstName}`)
    .subscribe(
      (data: any[]) => {
        if (data.length) {
          this.age = data[0].age;
          this.found = true;
        }
      }
    );
  }

  postProfile() {
    this.httpClient.post(`https://my-json-server.typicode.com/shahi-frontend/json-server/users/`, 
    {
      name: 'Mike Ross',
      age: 30
    })
    .subscribe(
      (data) => {
        console.log(data);
      }
    );
  }
}
