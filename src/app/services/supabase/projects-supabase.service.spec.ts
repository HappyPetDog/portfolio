import { TestBed } from '@angular/core/testing';

import { ProjectsSupabaseService } from './projects-supabase.service';

describe('ProjectsSupabaseService', () => {
  let service: ProjectsSupabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectsSupabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
