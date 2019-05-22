import {ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {BaseCustomFormComponent} from '../base-custom-form/base-custom-form.component';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-partner-request-casedata',
  templateUrl: './partner-request-casedata.component.html',
  styleUrls: ['./partner-request-casedata.component.css']
})
export class PartnerRequestCasedataComponent extends BaseCustomFormComponent implements OnInit {

  constructor(public formBuilder: FormBuilder) {
    super();
  }

  formGroup: FormGroup;
  partnerRequestFG: FormGroup;
  caseMetricsFG: FormGroup;

  populateForm = () => {
    this.caseMetricsFG = this.formBuilder.group(
      {
        Priority_v1: this.getDeepVal(this.data, 'CaseMetrics_v1.Priority_v1'),
        DueDate_v1: this.getDeepVal(this.data, 'CaseMetrics_v1.DueDate_v1'),
        Owner_v1: this.getDeepVal(this.data, 'CaseMetrics_v1.Owner_v1'),
        RequestOwnerEmail_v1: this.getDeepVal(this.data, 'CaseMetrics_v1.RequestOwnerEmail_v1'),
        RequestOwnerSMS_v1: this.getDeepVal(this.data, 'CaseMetrics_v1.RequestOwnerSMS_v1'),
        PartnerContactEmail_v1: this.getDeepVal(this.data, 'CaseMetrics_v1.PartnerContactEmail_v1')
      }
    );

    this.formGroup = this.formBuilder.group({
      RequestDescription_v1: this.data.RequestDescription_v1,
      PartnerReference_v1: this.data.PartnerReference_v1,
      RequestType_v1: this.data.RequestType_v1,
      CaseMetrics_v1: this.caseMetricsFG
    });

    this.formGroup.disable();
  }

  ngOnInit() {
    this.populateForm();
  }

  public updateData = (data) => {
    this.data = data;
    this.populateForm();
  }

}
