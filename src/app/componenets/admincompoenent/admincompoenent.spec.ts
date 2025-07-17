import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Admincompoenent } from './admincompoenent';

describe('Admincompoenent', () => {
  let component: Admincompoenent;
  let fixture: ComponentFixture<Admincompoenent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Admincompoenent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Admincompoenent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
