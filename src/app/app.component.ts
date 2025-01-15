import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HomeComponent, AboutComponent, ProjectsComponent, ContactMeComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'portfolio';
}
