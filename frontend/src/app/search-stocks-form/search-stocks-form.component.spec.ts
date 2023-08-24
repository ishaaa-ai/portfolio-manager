import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchStocksFormComponent } from './search-stocks-form.component';

describe('SearchStocksFormComponent', () => {
  let component: SearchStocksFormComponent;
  let fixture: ComponentFixture<SearchStocksFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchStocksFormComponent]
    });
    fixture = TestBed.createComponent(SearchStocksFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
