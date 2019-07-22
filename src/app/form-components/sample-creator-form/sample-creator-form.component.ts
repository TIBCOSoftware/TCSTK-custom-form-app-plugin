import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Form, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BaseCustomFormComponent} from '../base-custom-form/base-custom-form.component';
import {MatDatepicker} from '@angular/material';
import { Moment } from 'moment';

@Component({
  selector: 'app-sample-creator-form',
  templateUrl: './sample-creator-form.component.html',
  styleUrls: ['./sample-creator-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SampleCreatorFormComponent extends BaseCustomFormComponent implements OnInit {

  @ViewChild(MatDatepicker, {static: false}) picker: MatDatepicker<Moment>;

  constructor(public formBuilder: FormBuilder) {
    super();
  }

  formGroup: FormGroup;
  expensesFG: FormGroup;
  expenseItemFG: FormGroup;

  populateForm = () => {
    this.formGroup = this.formBuilder.group(
      {
        FieldName: this.getDeepVal(this.data, 'myCaseObjName.FieldName')
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
