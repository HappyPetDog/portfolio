import { Injectable, signal } from '@angular/core';
import { Project } from '../types/project-interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projectSignal = signal<Project[]>([]);
}
