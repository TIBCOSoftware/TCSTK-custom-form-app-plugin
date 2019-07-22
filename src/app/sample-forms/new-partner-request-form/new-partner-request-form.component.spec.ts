import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPartnerRequestFormComponent } from './new-partner-request-form.component';

describe('NewPartnerRequestForm', () => {
  let component: NewPartnerRequestFormComponent;
  let fixture: ComponentFixture<NewPartnerRequestFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPartnerRequestFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPartnerRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
