import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessErrorMessageComponent } from './success-error-message.component';

describe('SuccessErrorMessageComponent', () => {
  let component: SuccessErrorMessageComponent;
  let fixture: ComponentFixture<SuccessErrorMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessErrorMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
