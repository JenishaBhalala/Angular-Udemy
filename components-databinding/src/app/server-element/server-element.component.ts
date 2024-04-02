import { 
  Component, 
  OnInit, 
  Input, 
  ViewEncapsulation, 
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
  {

  @Input() element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    console.log('Constructor is called :)');
  }

  ngOnInit(): void {
    console.log('ngOnit is called :)');
    console.log('Text Content :' + this.header.nativeElement.textContent);
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }
  
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges is called :)');
    console.log(changes);
  }
  
  ngDoCheck(): void {
    console.log('ngDoCheck is called :)')
  }
  
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit is called :)');
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }
  
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked is called :)')
  }
  
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit is called :)')
    console.log('Text Content :' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked is called :)')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy is called :)')
  }
}

