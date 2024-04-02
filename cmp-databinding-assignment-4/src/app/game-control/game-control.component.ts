import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent implements OnInit{

  @Output() intervalFired = new EventEmitter<number>() ;
  ref;
  lastNum = 0;

  constructor() {}

  ngOnInit(): void {
  }

  startgGame() {

    this.ref = setInterval(() => {
      this.intervalFired.emit(this.lastNum + 1);
      this.lastNum++;
    }, 1000);
  }

  pauseGame() {
    clearInterval(this.ref);
  }
 
}
