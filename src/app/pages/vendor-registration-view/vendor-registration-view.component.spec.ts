import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorRegistrationViewComponent } from './vendor-registration-view.component';

describe('VendorRegistrationViewComponent', () => {
  let component: VendorRegistrationViewComponent;
  let fixture: ComponentFixture<VendorRegistrationViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorRegistrationViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorRegistrationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
