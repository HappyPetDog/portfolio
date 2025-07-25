import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { Database } from '../../types/database.types';
import { environment } from '../../../environments/environment';
import { from, map, Observable } from 'rxjs';
import { Skill } from '../../types/skill-interface';

@Injectable({
  providedIn: 'root'
})
export class SkillsSupabaseService {

  supabase = createClient<Database>(
    environment.supabaseUrl,
    environment.supabaseKey
  );

  getSkills(): Observable<Skill[]> {
    const promise = this.supabase.from('skills').select('*');
    return from(promise).pipe(
      map(response => {
        if (response.error) {
          console.error('Error fetching skills:', response.error);
          return [];
        }
        return response.data.map(item => ({
          skillId: item.id,
          skillName: item.skill_name,
          skillType: item.skill_type,
          logo: item.logo
        }));
      })
    );
  }
}
