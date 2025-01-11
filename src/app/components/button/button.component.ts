import { Component, input, signal } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  text = input<string>("Button");
  link = input<string>('/');
  textColor = input<string>("#FFFFFF");
  buttonColor = input<string>("#7D82B8");
  icon = input<string>('/');

}
