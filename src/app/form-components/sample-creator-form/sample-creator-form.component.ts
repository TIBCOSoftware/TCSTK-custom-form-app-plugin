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
  sampleAppFormGroup: FormGroup;

  populateForm = () => {

    /*
    * Sample data JSON
    * {"SampleApp":{"state":"Created","field1":"1","field2":"2","field3":"3"}}
    */

    this.sampleAppFormGroup = this.formBuilder.group(
      {
        // setup formGroups according to your form data structure
        field1: this.getDeepVal('', 'SampleApp.field1'),
        field2: this.getDeepVal('', 'SampleApp.field2'),
        field3: this.getDeepVal('', 'SampleApp.field3')
      }
    );

    // this is the top level form object (case type name - SampleApp)
    // only needed for creators and actions
    this.formGroup = this.formBuilder.group({
        SampleApp: this.sampleAppFormGroup
      }
    );

  }

  ngOnInit() {
    // note no input data passed for creator
    this.populateForm();
  }

  public updateData = (data) => {
    this.data = data;
    this.populateForm();
  }
}
