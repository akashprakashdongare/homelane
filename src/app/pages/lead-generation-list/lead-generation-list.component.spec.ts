import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadGenerationListComponent } from './lead-generation-list.component';

describe('LeadGenerationListComponent', () => {
  let component: LeadGenerationListComponent;
  let fixture: ComponentFixture<LeadGenerationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadGenerationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadGenerationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
