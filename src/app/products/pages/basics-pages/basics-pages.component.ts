import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-pages',
  templateUrl: './basics-pages.component.html',
  styles: [],
})
export class BasicsPagesComponent {
  public nameLower: string = 'rodrigo';
  public nameUpper: string = 'RODRIGO';
  public nameComplete: string = 'rOdrIGo pErez';

  public customDate: Date = new Date();
}
