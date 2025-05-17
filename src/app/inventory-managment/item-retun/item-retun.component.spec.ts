import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRetunComponent } from './item-retun.component';

describe('ItemRetunComponent', () => {
  let component: ItemRetunComponent;
  let fixture: ComponentFixture<ItemRetunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemRetunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemRetunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
