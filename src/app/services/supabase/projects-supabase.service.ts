import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment';
import { Database } from '../../types/database.types';
import { from, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsSupabaseService {
  supabase = createClient<Database>(
    environment.supabaseUrl,
    environment.supabaseKey
  );

  getProjects(): Observable<any> {
    const promise = this.supabase.from('projects').select('*');
    return from(promise).pipe(
      map(response => {
        if (response.error) {
          console.error('Error fetching projects:', response.error);
          return [];
        }
        return response.data;
      })
    );
  }
}
