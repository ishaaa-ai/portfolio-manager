import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewDataComponent } from './add-new-data.component';

describe('AddNewDataComponent', () => {
  let component: AddNewDataComponent;
  let fixture: ComponentFixture<AddNewDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewDataComponent]
    });
    fixture = TestBed.createComponent(AddNewDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
