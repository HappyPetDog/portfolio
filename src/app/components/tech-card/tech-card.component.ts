import { Component } from '@angular/core';
import { input } from '@angular/core';

@Component({
  selector: 'app-tech-card',
  imports: [],
  templateUrl: './tech-card.component.html',
})
export class TechCardComponent {
  name = input<string>("Default");
  textColor = input<string>("#ffffff");
  bgColor = input<string>("#7b4b94");
  logo = input<string>("/");

}
