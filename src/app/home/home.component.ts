import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { AboutComponent } from "../about/about.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ContactMeComponent } from "../contact-me/contact-me.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
