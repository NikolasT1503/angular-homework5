import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteSquareComponent } from './white-square.component';

describe('WhiteSquareComponent', () => {
  let component: WhiteSquareComponent;
  let fixture: ComponentFixture<WhiteSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhiteSquareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiteSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
