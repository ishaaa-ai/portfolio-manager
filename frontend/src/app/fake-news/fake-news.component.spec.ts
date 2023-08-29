import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeNewsComponent } from './fake-news.component';

describe('FakeNewsComponent', () => {
  let component: FakeNewsComponent;
  let fixture: ComponentFixture<FakeNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FakeNewsComponent]
    });
    fixture = TestBed.createComponent(FakeNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
