import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'login', url: '/folder/inbox', icon: 'person-circle' },
   
  ];
  public labels = [];
  constructor() {}
}
