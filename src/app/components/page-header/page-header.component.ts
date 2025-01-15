import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-page-header',
  imports: [],
  templateUrl: './page-header.component.html',
})
export class PageHeaderComponent {
   page_name = input.required();
}
