import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iterinary } from './iterinary';

describe('Iterinary', () => {
  let component: Iterinary;
  let fixture: ComponentFixture<Iterinary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Iterinary],
    }).compileComponents();

    fixture = TestBed.createComponent(Iterinary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
