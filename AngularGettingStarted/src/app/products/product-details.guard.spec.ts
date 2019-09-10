import { TestBed, async, inject } from '@angular/core/testing';

import { ProductDetailsGuard } from './product-details.guard';
import {RouterTestingModule} from '@angular/router/testing';

describe('ProductDetailsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductDetailsGuard],
      imports: [RouterTestingModule]
    });
  });

  it('should ...', inject([ProductDetailsGuard], (guard: ProductDetailsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
