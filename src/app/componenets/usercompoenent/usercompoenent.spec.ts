import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usercompoenent } from './usercompoenent';

describe('Usercompoenent', () => {
  let component: Usercompoenent;
  let fixture: ComponentFixture<Usercompoenent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Usercompoenent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Usercompoenent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
