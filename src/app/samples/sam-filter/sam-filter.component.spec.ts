import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamFilterComponent } from './sam-filter.component';

describe('SamFilterComponent', () => {
  let component: SamFilterComponent;
  let fixture: ComponentFixture<SamFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
