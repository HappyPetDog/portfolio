import { Component, input} from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  imports: [],
  templateUrl: './svg-icon.component.html',
  styleUrl: './svg-icon.component.css'
})
export class SvgIconComponent {
  path = input<string>('/');

}
