import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalMissionComponent } from './global-mission.component';

describe('GlobalMissionComponent', () => {
  let component: GlobalMissionComponent;
  let fixture: ComponentFixture<GlobalMissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlobalMissionComponent],
    });
    fixture = TestBed.createComponent(GlobalMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
