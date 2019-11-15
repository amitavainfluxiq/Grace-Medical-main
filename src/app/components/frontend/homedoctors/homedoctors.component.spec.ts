import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomedoctorsComponent } from './homedoctors.component';

describe('HomedoctorsComponent', () => {
  let component: HomedoctorsComponent;
  let fixture: ComponentFixture<HomedoctorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomedoctorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomedoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
