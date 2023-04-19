import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryMangementComponent } from './query-mangement.component';

describe('QueryMangementComponent', () => {
  let component: QueryMangementComponent;
  let fixture: ComponentFixture<QueryMangementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryMangementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryMangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
