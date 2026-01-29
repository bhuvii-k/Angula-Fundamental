import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compan } from './compan';

describe('Compan', () => {
  let component: Compan;
  let fixture: ComponentFixture<Compan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Compan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Compan);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
