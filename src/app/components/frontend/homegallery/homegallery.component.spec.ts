import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomegalleryComponent } from './homegallery.component';

describe('HomegalleryComponent', () => {
  let component: HomegalleryComponent;
  let fixture: ComponentFixture<HomegalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomegalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomegalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
