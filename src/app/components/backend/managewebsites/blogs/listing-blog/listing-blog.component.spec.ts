import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingBlogComponent } from './listing-blog.component';

describe('ListingBlogComponent', () => {
  let component: ListingBlogComponent;
  let fixture: ComponentFixture<ListingBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
