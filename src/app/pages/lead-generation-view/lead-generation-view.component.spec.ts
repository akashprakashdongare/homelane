import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadGenerationViewComponent } from './lead-generation-view.component';

describe('LeadGenerationViewComponent', () => {
  let component: LeadGenerationViewComponent;
  let fixture: ComponentFixture<LeadGenerationViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadGenerationViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadGenerationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
