import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorAccessComponent } from './vendor-access.component';

describe('VendorAccessComponent', () => {
  let component: VendorAccessComponent;
  let fixture: ComponentFixture<VendorAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
