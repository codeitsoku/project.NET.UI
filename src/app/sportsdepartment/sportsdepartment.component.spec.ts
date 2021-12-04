import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsdepartmentComponent } from './sportsdepartment.component';

describe('SportsdepartmentComponent', () => {
  let component: SportsdepartmentComponent;
  let fixture: ComponentFixture<SportsdepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsdepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsdepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
