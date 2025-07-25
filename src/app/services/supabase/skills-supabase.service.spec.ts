import { TestBed } from '@angular/core/testing';

import { SkillsSupabaseService } from './skills-supabase.service';

describe('SkillsSupabaseService', () => {
  let service: SkillsSupabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillsSupabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
