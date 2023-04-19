import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderViewDivdeComponent } from './order-view-divde.component';

describe('OrderViewDivdeComponent', () => {
  let component: OrderViewDivdeComponent;
  let fixture: ComponentFixture<OrderViewDivdeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderViewDivdeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderViewDivdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
