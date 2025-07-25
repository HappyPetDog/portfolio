import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment';
import { Database } from '../../types/database.types';
import { from, map, Observable } from 'rxjs';
import { Project } from '../../types/project-interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsSupabaseService {
  supabase = createClient<Database>(
    environment.supabaseUrl,
    environment.supabaseKey
  );

  getProjects(): Observable<Project[]> {
    const promise = this.supabase.from('projects').select('*');
    return from(promise).pipe(
      map(response => {
        if (response.error) {
          console.log('Error fetching projects:', response.error);
          return [];
        }
        console.log('Projects fetched successfully:', response.data);
        return response.data.map(item => ({
          projectId: item.project_id,
          projectTitle: item.project_title,
          projectDescription: item.project_description,
          linkToLive: item.link_to_live,
          linkToRepo: item.link_to_repo,
          technologies: item.technologies,
          thumbnail: item.thumbnail
        }));
      })
    );
  }
}
