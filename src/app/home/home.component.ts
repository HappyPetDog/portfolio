import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { AboutComponent } from "../about/about.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ContactMeComponent } from "../contact-me/contact-me.component";
import { ButtonComponent } from '../components/button/button.component';

@Component({
  selector: 'app-home',
  imports: [ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
