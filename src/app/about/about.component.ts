import { Component, inject, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../components/page-header/page-header.component';
import { TechCardComponent } from "../components/tech-card/tech-card.component";
import { CommonModule, NgFor } from '@angular/common';
import { SkillsSupabaseService } from '../services/supabase/skills-supabase.service';
import { Observable, of } from 'rxjs';
import { Skill } from '../types/skill-interface';

@Component({
  selector: 'app-about',
  imports: [TechCardComponent, NgFor, CommonModule],
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit{
  private SkillsSupabaseService = inject(SkillsSupabaseService);
  languages$: Observable<Skill[]> = of([]);
  technologies$: Observable<Skill[]> = of([]);

  ngOnInit(): void {
    this.SkillsSupabaseService.getLanguages().subscribe((languages) => {
      this.languages$ = of(languages);
      console.log('Languages fetched successfully:', languages);
    });  

    this.SkillsSupabaseService.getTechnologies().subscribe((technologies) => {
      this.technologies$ = of(technologies);
      console.log('Technologies fetched successfully:', technologies);
    });
  }
}
