import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProjectsAllComponent } from './admin-projects-all.component';

describe('AdminProjectsAllComponent', () => {
  let component: AdminProjectsAllComponent;
  let fixture: ComponentFixture<AdminProjectsAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProjectsAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProjectsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
