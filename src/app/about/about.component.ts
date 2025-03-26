import { Component } from '@angular/core';
import { PageHeaderComponent } from '../components/page-header/page-header.component';
import { TechCardComponent } from "../components/tech-card/tech-card.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [TechCardComponent, NgFor],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  languages = [
    { name: 'Python', logo: 'assets/icons/python.png' },
    { name: 'TypeScript', logo: 'assets/icons/typescript.png' },
    { name: 'Javascript', logo: 'assets/icons/javascript.png' },
    { name: 'C', logo: 'assets/icons/c.png' },
  ]

  technologies = [
    // Frameworks
    { name: 'Angular', logo: 'assets/icons/angular.png' }, 
    { name: 'React', logo: 'assets/icons/react.svg' },
    { name: 'Svelte', logo: 'assets/icons/svelte.png' },

    // Frontend
    { name: 'RxJS', logo: 'assets/icons/rxjs.png' },
    { name: 'TailwindCSS', logo: 'assets/icons/tailwind-css.png' },

    // Backend
    { name: 'Firebase', logo: 'assets/icons/firebase.png' },
    { name: 'MySQL', logo: 'assets/icons/mysql.png' },
    { name: 'Git', logo: 'assets/icons/git.png' },

    // Basics
    { name: 'HTML', logo: 'assets/icons/html.png' },
    { name: 'CSS', logo: 'assets/icons/css.png' },

  ]

}
