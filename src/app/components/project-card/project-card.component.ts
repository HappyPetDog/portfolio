import { NgFor, NgIf } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { TagComponent } from '../tag/tag.component';

@Component({
  selector: 'app-project-card',
  imports: [NgFor, NgIf, TagComponent],
  templateUrl: './project-card.component.html',
})
export class ProjectCardComponent {
  title = input<string>('Project Title');
  description = input<string>('Project Description');
  technologies = input<string[]>(['Tech 1', 'Tech 2', 'Tech 3']);
  link_to_repo = input<string | null>();
  link_to_live = input<string | null>()
  thumbnail = input<string>('/');
  
}
