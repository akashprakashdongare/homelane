import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationApprovalViewComponent } from './quotation-approval-view.component';

describe('QuotationApprovalViewComponent', () => {
  let component: QuotationApprovalViewComponent;
  let fixture: ComponentFixture<QuotationApprovalViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotationApprovalViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationApprovalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
