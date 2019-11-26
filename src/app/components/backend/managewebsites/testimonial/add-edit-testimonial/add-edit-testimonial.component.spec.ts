import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTestimonialComponent } from './add-edit-testimonial.component';

describe('AddEditTestimonialComponent', () => {
  let component: AddEditTestimonialComponent;
  let fixture: ComponentFixture<AddEditTestimonialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditTestimonialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
