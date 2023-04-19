import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchOrderListComponent } from './dispatch-order-list.component';

describe('DispatchOrderListComponent', () => {
  let component: DispatchOrderListComponent;
  let fixture: ComponentFixture<DispatchOrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispatchOrderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
