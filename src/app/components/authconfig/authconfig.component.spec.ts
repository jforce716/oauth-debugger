import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthconfigComponent } from './authconfig.component';

describe('AuthconfigComponent', () => {
  let component: AuthconfigComponent;
  let fixture: ComponentFixture<AuthconfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthconfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
