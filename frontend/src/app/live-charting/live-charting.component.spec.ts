import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveChartingComponent } from './live-charting.component';

describe('LiveChartingComponent', () => {
  let component: LiveChartingComponent;
  let fixture: ComponentFixture<LiveChartingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiveChartingComponent]
    });
    fixture = TestBed.createComponent(LiveChartingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
