import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastFewPostsComponent } from './last-few-posts.component';

describe('LastFewPostsComponent', () => {
  let component: LastFewPostsComponent;
  let fixture: ComponentFixture<LastFewPostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastFewPostsComponent]
    });
    fixture = TestBed.createComponent(LastFewPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
