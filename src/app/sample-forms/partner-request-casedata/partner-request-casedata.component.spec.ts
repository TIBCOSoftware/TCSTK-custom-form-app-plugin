import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerRequestCasedataComponent } from './partner-request-casedata.component';

describe('PartnerRequestCasedataComponent', () => {
  let component: PartnerRequestCasedataComponent;
  let fixture: ComponentFixture<PartnerRequestCasedataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerRequestCasedataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerRequestCasedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
