import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysproComponent } from './syspro.component';

describe('SysproComponent', () => {
  let component: SysproComponent;
  let fixture: ComponentFixture<SysproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
