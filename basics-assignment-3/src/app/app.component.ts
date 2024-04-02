import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showDetails = false;
  clicked = [];


  displayDetails() {
    this.showDetails = !this.showDetails;
    // To log an incrementing number
    // this.clicked.push(this.clicked.length + 1);

    // To log a timestamp 
    this.clicked.push(new Date());
  }  
}
