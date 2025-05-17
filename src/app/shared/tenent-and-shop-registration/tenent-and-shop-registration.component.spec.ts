import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenentAndShopRegistrationComponent } from './tenent-and-shop-registration.component';

describe('TenentAndShopRegistrationComponent', () => {
  let component: TenentAndShopRegistrationComponent;
  let fixture: ComponentFixture<TenentAndShopRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenentAndShopRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenentAndShopRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
