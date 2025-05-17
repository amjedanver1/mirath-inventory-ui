import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRefillComponent } from './item-refill.component';

describe('ItemRefillComponent', () => {
  let component: ItemRefillComponent;
  let fixture: ComponentFixture<ItemRefillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemRefillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemRefillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
