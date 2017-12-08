import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashbackTableComponent } from './cashback-table.component';

describe('CashbackComponent', () => {
  let component: CashbackTableComponent;
  let fixture: ComponentFixture<CashbackTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashbackTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashbackTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
