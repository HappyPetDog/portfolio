import { Component, inject } from '@angular/core';
import { PageHeaderComponent } from '../components/page-header/page-header.component';
import { ProjectCardComponent } from '../components/project-card/project-card.component';
import { CommonModule, NgFor } from '@angular/common';
import { ProjectsSupabaseService } from '../services/supabase/projects-supabase.service';
import { InvokeFunctionExpr } from '@angular/compiler';
import { ProjectsService } from '../services/projects.service';
import { Observable, of } from 'rxjs';
import { Project } from '../types/project-interface';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent, NgFor, CommonModule],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  private projectsSupabaseService = inject(ProjectsSupabaseService);
  private projectsService = inject(ProjectsService);
  projects$! : Observable<Project[]>;

  projectsData = [
    {
      projectId: 1,
      projectTitle: 'Pose Estimation-based Shoplifting Detection',
      projectDescription: 'A real-time system that detects potential shoplifting incidents using pose estimation techniques.',
      technologies: ['YOLO', 'Python', 'Computer Vision'],
      linkToRepo: 'https://github.com/AlJf-the-Coder/cctv-shoplifting-detection.git',
      linkToLive: null,
      thumbnail: '/assets/images/shoplifting-detection.jpg'
    },
    {
      projectId: 2,
      projectTitle: 'CourseMinder',
      projectDescription: 'A friendly web app designed for UP students to easily track their course progress and grades through a simple, intuitive interface.',
      technologies: ['Svelte', 'TailwindCSS', 'Firebase'],
      linkToRepo: 'https://github.com/violessi/CourseMinder',
      linkToLive: 'https://courseminder.vercel.app/',
      thumbnail: '/assets/images/courseminder.png'
    }, 
    {
      projectId: 3,
      projectTitle: 'TeddyCare',
      projectDescription: 'An IoT companion for parents, designed to detect crying and loud noises, play lullabies, and simulate a heartbeat to provide comfort to babies.',
      technologies: ['Arduino', 'Firebase', 'React'],
      linkToRepo: 'https://github.com/ry4nd/bearwithme',
      linkToLive: 'https://bearwithme.vercel.app/',
      thumbnail: '/assets/images/teddycare.png'
    }, 
    {
      projectId: 4,
      projectTitle: 'BantAI',
      projectDescription: 'An AI model that detects car crashes from CCTV footage and sends alerts to expedite medical response and optimize traffic management.',
      technologies: ['Computer Vision', 'YOLO', 'Python'],
      linkToLive: null,
      linkToRepo: 'https://github.com/HappyPetDog/bantai',
      thumbnail: '/assets/images/bantai.png'
    }
  ]

  ngOnInit() {
    this.projects$ = this.projectsSupabaseService.getProjects();
    // this.projects$ = of(this.projectsData); // Using the hardcoded projects for now
  }
  
}
