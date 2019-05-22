import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BaseCustomFormComponent} from '../base-custom-form/base-custom-form.component';

@Component({
  selector: 'app-update-request-metrics-form',
  templateUrl: './update-request-metrics-form.component.html',
  styleUrls: ['./update-request-metrics-form.component.css']
})
export class UpdateRequestMetricsFormComponent extends BaseCustomFormComponent implements OnInit {

  constructor(public formBuilder: FormBuilder) {
    super();
  }

  formGroup: FormGroup;
  partnerRequestFG: FormGroup;
  customerFG: FormGroup;
  caseMetricsFG: FormGroup;
  requestDetailsFG: FormGroup;
  reqTypeEnum = [
    'Account Enquiry',
    'Shipping & Tracking',
    'Packaging Supplies',
    'Rates & Transit Times',
    'Invoice & Payments',
    'Order Enquiry',
    'Product Details Enquiry',
    'Open an Account',
    'General Enquiry',
    'Claims'
    ];

  populateForm = () => {

    this.caseMetricsFG = this.formBuilder.group(
      {
        Priority_v1: this.getDeepVal(this.data, 'PartnerRequest.CaseMetrics_v1.Priority_v1'),
        DueDate_v1: this.getDeepVal(this.data, 'PartnerRequest.CaseMetrics_v1.DueDate_v1'),
        Owner_v1: this.getDeepVal(this.data, 'PartnerRequest.CaseMetrics_v1.Owner_v1'),
        RequestOwnerEmail_v1: this.getDeepVal(this.data, 'PartnerRequest.CaseMetrics_v1.RequestOwnerEmail_v1'),
        RequestOwnerSMS_v1: this.getDeepVal(this.data, 'PartnerRequest.CaseMetrics_v1.RequestOwnerSMS_v1'),
        PartnerContactEmail_v1: this.getDeepVal(this.data, 'PartnerRequest.CaseMetrics_v1.PartnerContactEmail_v1')
      }
    );

    this.customerFG = this.formBuilder.group(
      {
        Name_v1: this.getDeepVal(this.data, 'PartnerRequest.Customer_v1.Name_v1'),
        CustomerReference_v1: this.getDeepVal(this.data, 'PartnerRequest.Customer_v1.CustomerReference_v1'),
        CustomerDetailsExtract_v1: this.getDeepVal(this.data, 'PartnerRequest.Customer_v1.CustomerDetailsExtract_v1'),
        CustomerEmail_v1: this.getDeepVal(this.data, 'PartnerRequest.Customer_v1.CustomerEmail_v1')
      }
    );

    this.requestDetailsFG = this.formBuilder.group(
      {
        PartReference_v1: this.getDeepVal(this.data, 'PartnerRequest.RequestDetails_v1.PartReference_v1'),
        PartName_v1: this.getDeepVal(this.data, 'PartnerRequest.RequestDetails_v1.PartName_v1'),
        PartDescription_v1: this.getDeepVal(this.data, 'PartnerRequest.RequestDetails_v1.PartDescription_v1'),
        OrderReference_v1: this.getDeepVal(this.data, 'PartnerRequest.RequestDetails_v1.OrderReference_v1'),
      }
    );

    this.partnerRequestFG = this.formBuilder.group({
        RequestDescription_v1: this.getDeepVal(this.data, 'PartnerRequest.RequestDescription_v1'),
        RequestType_v1: this.getDeepVal(this.data, 'PartnerRequest.RequestType_v1'),
        Customer_v1: this.customerFG,
        RequestDetails_v1: this.requestDetailsFG,
        CaseMetrics_v1: this.caseMetricsFG
      }
    );


    this.formGroup = this.formBuilder.group({
      PartnerRequest: this.partnerRequestFG
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
