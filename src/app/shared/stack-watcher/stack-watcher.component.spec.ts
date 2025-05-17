import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackWatcherComponent } from './stack-watcher.component';

describe('StackWatcherComponent', () => {
  let component: StackWatcherComponent;
  let fixture: ComponentFixture<StackWatcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackWatcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackWatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
