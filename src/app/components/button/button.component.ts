import { Component, input, signal } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  text = input<string>('Button');
  link = input<string>('/');
  textColor = input<string>('#ffffff');
  buttonColor = input<string>('#7d82b8');
  icon = input<string>('/');

}
