import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExpenseClaimFormComponent } from './new-expense-claim-form.component';

describe('NewPartnerRequestForm', () => {
  let component: NewExpenseClaimFormComponent;
  let fixture: ComponentFixture<NewExpenseClaimFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewExpenseClaimFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewExpenseClaimFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
