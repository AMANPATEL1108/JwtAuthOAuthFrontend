import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accesdenied } from './accesdenied';

describe('Accesdenied', () => {
  let component: Accesdenied;
  let fixture: ComponentFixture<Accesdenied>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Accesdenied]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Accesdenied);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
