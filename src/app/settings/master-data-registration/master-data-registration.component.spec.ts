import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDataRegistrationComponent } from './master-data-registration.component';

describe('MasterDataRegistrationComponent', () => {
  let component: MasterDataRegistrationComponent;
  let fixture: ComponentFixture<MasterDataRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterDataRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterDataRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
