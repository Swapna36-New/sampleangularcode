import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchvegetableComponent } from './searchvegetable.component';

describe('SearchvegetableComponent', () => {
  let component: SearchvegetableComponent;
  let fixture: ComponentFixture<SearchvegetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchvegetableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchvegetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
