import { Component } from '@angular/core';
import { PageHeaderComponent } from '../components/page-header/page-header.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-me',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-me.component.html',
})
export class ContactMeComponent {
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
  })

}
