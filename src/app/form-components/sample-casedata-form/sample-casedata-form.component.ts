import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Form, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BaseCustomFormComponent} from '../base-custom-form/base-custom-form.component';
import {MatDatepicker} from '@angular/material';
import { Moment } from 'moment';

@Component({
  selector: 'app-sample-casedata-form',
  templateUrl: './sample-casedata-form.component.html',
  styleUrls: ['./sample-casedata-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SampleCasedataFormComponent extends BaseCustomFormComponent implements OnInit {

  @ViewChild(MatDatepicker, {static: false}) picker: MatDatepicker<Moment>;

  constructor(public formBuilder: FormBuilder) {
    super();
  }

  formGroup: FormGroup;

  /*
   * Sample data JSON
   * {"state":"Created","field1":"1","field2":"2","field3":"3"}
   *
   * Note: Case Data Forms use a different data structure to actions and creators.
   * They do NOT contain the parent case object (SampleApp) eg:
   * case data: {"state":"Created","field1":"1","field2":"2","field3":"3"}
   * vs
   * action: {"SampleApp":{"state":"Created","field1":"1","field2":"2","field3":"3"}}
  */

  populateForm = () => {
    this.formGroup = this.formBuilder.group(
      {
        // setup formGroups according to your form data structure
        field1: this.getDeepVal(this.data, 'field1'),
        field2: this.getDeepVal(this.data, 'field2'),
        field3: this.getDeepVal(this.data, 'field3')
      }
    );

  }

  ngOnInit() {
    // input data will be passed as 'data' input parameter
    this.populateForm();
  }

  public updateData = (data) => {
    // if case page is refreshed - this will be called to update case data
    this.data = data;
    this.populateForm();
  }
}
