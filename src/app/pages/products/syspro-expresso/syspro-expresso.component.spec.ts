import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysproExpressoComponent } from './syspro-expresso.component';

describe('SysproExpressoComponent', () => {
  let component: SysproExpressoComponent;
  let fixture: ComponentFixture<SysproExpressoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysproExpressoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysproExpressoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
