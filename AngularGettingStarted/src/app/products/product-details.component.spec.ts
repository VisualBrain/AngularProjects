import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductDetailsComponent} from './product-details.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ProductDetailsGuard} from './product-details.guard';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailsComponent],
      providers: [],
      imports: [
        RouterTestingModule.withRoutes([
          {path: 'products/:id', component: ProductDetailsComponent, canActivate: [ProductDetailsGuard]},
        ])
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
