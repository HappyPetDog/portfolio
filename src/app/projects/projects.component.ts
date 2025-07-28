import { Component, inject, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../components/page-header/page-header.component';
import { ProjectCardComponent } from '../components/project-card/project-card.component';
import { CommonModule, NgFor } from '@angular/common';
import { ProjectsSupabaseService } from '../services/supabase/projects-supabase.service';
import { InvokeFunctionExpr } from '@angular/compiler';
import { ProjectsService } from '../services/projects.service';
import { Observable, of, take } from 'rxjs';
import { Project } from '../types/project-interface';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent, NgFor, CommonModule],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent implements OnInit {
  private projectsSupabaseService = inject(ProjectsSupabaseService);
  private projectsService = inject(ProjectsService);
  projects$: Observable<Project[]> = of([]);

  ngOnInit(): void {
    this.projectsSupabaseService.getProjects().subscribe((projects) => {
      this.projectsService.projectSignal.set(projects);
      this.projects$ = of(projects);
      console.log('Projects fetched successfully:', projects);
    });
  }
  
}
