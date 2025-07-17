import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCompoenent } from './login-compoenent';

describe('LoginCompoenent', () => {
  let component: LoginCompoenent;
  let fixture: ComponentFixture<LoginCompoenent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginCompoenent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginCompoenent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
