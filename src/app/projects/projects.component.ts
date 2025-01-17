import { Component } from '@angular/core';
import { PageHeaderComponent } from '../components/page-header/page-header.component';
import { ProjectCardComponent } from '../components/project-card/project-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent, NgFor],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  projects = [
    {
      title: 'CourseMinder',
      description: 'A friendly web app designed for UP students to easily track their course progress and grades through a simple, intuitive interface.',
      technologies: ['Svelte', 'TailwindCSS', 'Firebase'],
      link_to_repo: 'https://github.com/violessi/CourseMinder',
      link_to_live: 'https://courseminder.vercel.app/',
      thumbnail: '/assets/images/courseminder.png'
    }, 
    {
      title: 'TeddyCare',
      description: 'An IoT companion for parents, designed to detect crying, play lullabies, and simulate a heartbeat to comfort and soothe babies.',
      technologies: ['React', 'Arduino', 'Firebase'],
      link_to_repo: 'https://github.com/ry4nd/bearwithme',
      link_to_live: 'https://bearwithme.vercel.app/',
      thumbnail: '/assets/images/teddycare.png'
    }, 
    {
      title: 'BantAI',
      description: 'An AI model that detects car crashes from CCTV footage, and sends alerts to ensure quick medical response and efficient traffic management.',
      technologies: ['YOLO', 'Python'],
      link_to_repo: 'https://github.com/HappyPetDog/bantai',
      thumbnail: '/assets/images/bantai.png'
    }
  ]
}
