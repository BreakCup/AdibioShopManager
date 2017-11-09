import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintCodeComponent } from './print-code.component';

describe('Print.CodeComponent', () => {
  let component: PrintCodeComponent;
  let fixture: ComponentFixture<PrintCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
