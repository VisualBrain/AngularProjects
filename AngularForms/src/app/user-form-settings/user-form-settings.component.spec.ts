import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormSettingsComponent } from './user-form-settings.component';

describe('UserFormSettingsComponent', () => {
  let component: UserFormSettingsComponent;
  let fixture: ComponentFixture<UserFormSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFormSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
