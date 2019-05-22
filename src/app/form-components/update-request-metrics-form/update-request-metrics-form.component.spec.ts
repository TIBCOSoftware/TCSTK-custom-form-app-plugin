import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRequestMetricsFormComponent } from './update-request-metrics-form.component';

describe('UpdateRequestMetricsForm', () => {
  let component: UpdateRequestMetricsFormComponent;
  let fixture: ComponentFixture<UpdateRequestMetricsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateRequestMetricsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRequestMetricsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
