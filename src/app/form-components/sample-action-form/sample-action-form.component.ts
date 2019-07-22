import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Form, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BaseCustomFormComponent} from '../base-custom-form/base-custom-form.component';
import {MatDatepicker} from '@angular/material';
import { Moment } from 'moment';

@Component({
  selector: 'app-sample-action-form',
  templateUrl: './sample-action-form.component.html',
  styleUrls: ['./sample-action-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SampleActionFormComponent extends BaseCustomFormComponent implements OnInit {

  @ViewChild(MatDatepicker, {static: false}) picker: MatDatepicker<Moment>;

  constructor(public formBuilder: FormBuilder) {
    super();
  }

  formGroup: FormGroup;
  sampleAppFormGroup: FormGroup;

  /*
   * Sample data JSON
   {"SampleApp":{"state":"Created","field1":"1","field2":"2","field3":"3"}}
  */

  populateForm = () => {
    this.sampleAppFormGroup = this.formBuilder.group(
      {
        // setup formGroups according to your form data structure
        field1: this.getDeepVal(this.data, 'SampleApp.field1'),
        field2: this.getDeepVal(this.data, 'SampleApp.field2'),
        field3: this.getDeepVal(this.data, 'SampleApp.field3')
      }
    );

    this.formGroup = this.formBuilder.group({
      SampleApp: this.sampleAppFormGroup
      }
    );

  }

  ngOnInit() {
    // note: data wont be passed for an action
    this.populateForm();
  }

  public updateData = (data) => {
    this.data = data;
    this.populateForm();
  }
}