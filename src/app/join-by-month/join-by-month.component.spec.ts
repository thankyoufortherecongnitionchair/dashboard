import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinByMonthComponent } from './join-by-month.component';

describe('JoinByMonthComponent', () => {
  let component: JoinByMonthComponent;
  let fixture: ComponentFixture<JoinByMonthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JoinByMonthComponent],
    });
    fixture = TestBed.createComponent(JoinByMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
