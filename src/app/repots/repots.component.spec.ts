import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepotsComponent } from './repots.component';

describe('RepotsComponent', () => {
  let component: RepotsComponent;
  let fixture: ComponentFixture<RepotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
