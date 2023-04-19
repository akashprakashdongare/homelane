import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationHistoryViewComponent } from './quotation-history-view.component';

describe('QuotationHistoryViewComponent', () => {
  let component: QuotationHistoryViewComponent;
  let fixture: ComponentFixture<QuotationHistoryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotationHistoryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationHistoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
