import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInvitationComponent } from './customer-invitation.component';

describe('CustomerInvitationComponent', () => {
  let component: CustomerInvitationComponent;
  let fixture: ComponentFixture<CustomerInvitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerInvitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
