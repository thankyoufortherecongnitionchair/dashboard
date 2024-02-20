import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinsByStaeComponent } from './joins-by-stae.component';

describe('JoinsByStaeComponent', () => {
  let component: JoinsByStaeComponent;
  let fixture: ComponentFixture<JoinsByStaeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JoinsByStaeComponent]
    });
    fixture = TestBed.createComponent(JoinsByStaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
