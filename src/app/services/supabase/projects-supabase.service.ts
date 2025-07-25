import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment';
import { Database } from '../../types/database.types';
import { from, map, Observable, take } from 'rxjs';
import { Project } from '../../types/project-interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsSupabaseService {
  private supabase = createClient<Database>(
    environment.supabaseUrl,
    environment.supabaseKey
  );

  constructor() {
    console.log('🔍 Supabase URL:', environment.supabaseUrl);
    console.log('🔍 Supabase Key:', environment.supabaseKey);
  }
  

  getProjects(): Observable<any> {
    console.log('⚡ getProjects() called');
  
    const promise = this.supabase.from('projects').select('*');
  
    console.log('⏳ after supabase.from');
  
    return from(promise).pipe(
      map((response) => {
        console.log('📥 Supabase response received:', response);
        if (response.error) {
          console.error('❌ Supabase error:', response.error);
          return [];
        }
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
