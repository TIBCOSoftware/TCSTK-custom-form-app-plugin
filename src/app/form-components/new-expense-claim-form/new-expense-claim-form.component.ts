import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Form, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BaseCustomFormComponent} from '../base-custom-form/base-custom-form.component';
import {MatDatepicker} from '@angular/material';
import { Moment } from 'moment';

@Component({
  selector: 'app-new-expense-claim-form',
  templateUrl: './new-expense-claim-form.component.html',
  styleUrls: ['./new-expense-claim-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewExpenseClaimFormComponent extends BaseCustomFormComponent implements OnInit {

  @ViewChild(MatDatepicker, {static: false}) picker: MatDatepicker<Moment>;

  constructor(public formBuilder: FormBuilder) {
    super();
  }

  formGroup: FormGroup;
  expensesFG: FormGroup;
  expenseItemFG: FormGroup;

  populateForm = () => {
    this.expenseItemFG = this.formBuilder.group(
      {
        Description: this.getDeepVal(this.data, 'Expenses.ExpenseItem.Description'),
        DateOfExpense: this.getDeepVal(this.data, 'Expenses.ExpenseItem.DateOfExpense'),
        ReceiptAvailable: this.getDeepVal(this.data, 'Expenses.ExpenseItem.ReceiptAvailable'),
        Amount: this.getDeepVal(this.data, 'Expenses.ExpenseItem.Amount')
      }
    );

    this.expensesFG = this.formBuilder.group(
      {
        ClaimantName: this.getDeepVal(this.data, 'Expenses.ClaimantName'),
        DepartmentCode: this.getDeepVal(this.data, 'Expenses.DepartmentCode'),
        ExpenseItem: this.expenseItemFG
      }
    );

    this.formGroup = this.formBuilder.group(
      {
        Expenses: this.expensesFG
      }
    );

  }

  ngOnInit() {
    this.populateForm();
  }

  public updateData = (data) => {
    this.data = data;
    this.populateForm();
  }
}
