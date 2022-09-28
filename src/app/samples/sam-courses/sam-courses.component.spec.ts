import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamCoursesComponent } from './sam-courses.component';

describe('SamCoursesComponent', () => {
  let component: SamCoursesComponent;
  let fixture: ComponentFixture<SamCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
