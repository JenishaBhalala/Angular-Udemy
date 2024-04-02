import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddNum: number[] = [];
  evenNum: number[] = [];

  onIntervalFired(firedNum: number) {
    if (firedNum % 2 === 0) {
      this.evenNum.push(firedNum);
    } else {
      this.oddNum.push(firedNum);
    }
  }
}

