import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopThreeCommentsComponent } from './top-three-comments.component';

describe('TopThreeCommentsComponent', () => {
  let component: TopThreeCommentsComponent;
  let fixture: ComponentFixture<TopThreeCommentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopThreeCommentsComponent]
    });
    fixture = TestBed.createComponent(TopThreeCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
