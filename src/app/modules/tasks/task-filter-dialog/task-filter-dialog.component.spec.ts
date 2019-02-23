import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFilterDialogComponent } from './task-filter-dialog.component';

describe('TaskFilterDialogComponent', () => {
  let component: TaskFilterDialogComponent;
  let fixture: ComponentFixture<TaskFilterDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskFilterDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskFilterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
