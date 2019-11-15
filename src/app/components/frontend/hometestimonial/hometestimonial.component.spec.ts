import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HometestimonialComponent } from './hometestimonial.component';

describe('HometestimonialComponent', () => {
  let component: HometestimonialComponent;
  let fixture: ComponentFixture<HometestimonialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HometestimonialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HometestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
