import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BaseCustomFormComponent} from '../base-custom-form/base-custom-form.component';

@Component({
  selector: 'app-new-partner-request-form',
  templateUrl: './new-partner-request-form.component.html',
  styleUrls: ['./new-partner-request-form.component.css']
})
export class NewPartnerRequestFormComponent extends BaseCustomFormComponent implements OnInit {

  constructor(public formBuilder: FormBuilder) {
    super();
  }

  formGroup: FormGroup;
  partnerRequestFG: FormGroup;
  caseMetricsFG: FormGroup;

  ngOnInit() {

    this.caseMetricsFG = this.formBuilder.group(
      {
        'Priority_v1': '',
        'DueDate_v1': '',
        'Owner_v1': '',
        'RequestOwnerEmail_v1': '',
        'RequestOwnerSMS_v1': '',
        'PartnerContactEmail_v1': ''
      }
    )

    this.partnerRequestFG = this.formBuilder.group(
      {
        'CaseMetrics_v1': this.caseMetricsFG
      }
    )

    this.formGroup = this.formBuilder.group({
      'ProductDetails_v1': '',
      'PartnerRequest': this.partnerRequestFG
    });
  }
}
