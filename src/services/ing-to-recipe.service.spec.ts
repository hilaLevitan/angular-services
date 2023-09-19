import { TestBed } from '@angular/core/testing';

import { IngToRecipeService } from './ing-to-recipe.service';

describe('IngToRecipeService', () => {
  let service: IngToRecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngToRecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
