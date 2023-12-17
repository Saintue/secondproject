import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSortComponent } from './select-sort.component';

describe('SelectSortComponent', () => {
  let component: SelectSortComponent;
  let fixture: ComponentFixture<SelectSortComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectSortComponent]
    });
    fixture = TestBed.createComponent(SelectSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
