import { TestBed } from '@angular/core/testing';

import { WelcomeMentorSearchService } from './welcome-mentor-search.service';

describe('WelcomeMentorSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WelcomeMentorSearchService = TestBed.get(WelcomeMentorSearchService);
    expect(service).toBeTruthy();
  });
});
