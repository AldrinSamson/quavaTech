import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsLoginComponent } from './blogs-login.component';

describe('BlogsLoginComponent', () => {
  let component: BlogsLoginComponent;
  let fixture: ComponentFixture<BlogsLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogsLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
