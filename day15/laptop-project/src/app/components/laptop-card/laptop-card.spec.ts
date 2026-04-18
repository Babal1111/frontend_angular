import { ComponentFixture, TestBed, } from '@angular/core/testing';

import { LaptopCard } from './laptop-card';

describe('LaptopCard', () => {
  let component: LaptopCard;
  let fixture: ComponentFixture<LaptopCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaptopCard],
    }).compileComponents();

    fixture = TestBed.createComponent(LaptopCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
