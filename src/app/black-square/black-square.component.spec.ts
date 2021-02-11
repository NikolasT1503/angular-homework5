import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackSquareComponent } from './black-square.component';

describe('BlackSquareComponent', () => {
  let component: BlackSquareComponent;
  let fixture: ComponentFixture<BlackSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackSquareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
