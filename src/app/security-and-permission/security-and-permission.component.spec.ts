import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityAndPermissionComponent } from './security-and-permission.component';

describe('SecurityAndPermissionComponent', () => {
  let component: SecurityAndPermissionComponent;
  let fixture: ComponentFixture<SecurityAndPermissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityAndPermissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityAndPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
