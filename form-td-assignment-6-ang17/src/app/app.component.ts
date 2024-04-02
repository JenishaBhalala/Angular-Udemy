import { Component, ViewChild } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [
      RouterOutlet,
      FormsModule,
      CommonModule,
    ]
})
export class AppComponent {
  subscriptions = ['basic', 'advanced', 'pro'];
  selectedSub = 'advanced';
  @ViewChild('signupForm', { static: false }) sgnForm!: NgForm;

  onSubmit() {
    console.log(this.sgnForm.value);
  }
}
