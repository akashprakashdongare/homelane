import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationApprovalListComponent } from './quotation-approval-list.component';

describe('QuotationApprovalListComponent', () => {
  let component: QuotationApprovalListComponent;
  let fixture: ComponentFixture<QuotationApprovalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotationApprovalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationApprovalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
