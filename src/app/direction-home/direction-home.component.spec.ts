import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionHomeComponent } from './direction-home.component';

describe('DirectionHomeComponent', () => {
  let component: DirectionHomeComponent;
  let fixture: ComponentFixture<DirectionHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectionHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
