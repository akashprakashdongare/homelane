import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationHistoryListComponent } from './quotation-history-list.component';

describe('QuotationHistoryListComponent', () => {
  let component: QuotationHistoryListComponent;
  let fixture: ComponentFixture<QuotationHistoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotationHistoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationHistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
