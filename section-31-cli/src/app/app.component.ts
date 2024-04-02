import { Component, Injector } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestNavComponent } from './test-nav/test-nav.component';
import { CommonModule } from '@angular/common';
import { TestTableComponent } from './test-table/test-table.component';
import { AlertComponent } from './alert/alert.component';
import { createCustomElement } from '@angular/elements';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TestNavComponent,
    TestTableComponent,
    AlertComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  content: SafeHtml | undefined ;

  constructor(injector: Injector, domSanitizer: DomSanitizer) {
    const AlertEle = createCustomElement(AlertComponent, {injector: injector});
    customElements.define('my-alert', AlertEle);
    setTimeout(() => {
      this.content = domSanitizer.bypassSecurityTrustHtml("<my-alert message='Rendered Dynamically !!!></my-alert>");
    }, 3000);
  }
}
