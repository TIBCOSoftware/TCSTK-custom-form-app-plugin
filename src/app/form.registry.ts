import {BaseCustomFormComponent} from './form-components/base-custom-form/base-custom-form.component';
import {SampleCreatorFormComponent} from './form-components/sample-creator-form/sample-creator-form.component';
import {SampleActionFormComponent} from './form-components/sample-action-form/sample-action-form.component';
import {SampleCasedataFormComponent} from './form-components/sample-casedata-form/sample-casedata-form.component';


export class FormRecord {
  constructor(public id: string,
              public type: string,
              public name: string,
              public description: string,
              public component: any
  ) {
  }
}

export const FORM_REGISTRY = [
  new FormRecord('default', 'creator', 'No Form Available', 'No form available to render', BaseCustomFormComponent),
  new FormRecord('SampleApp.SampleApp.creator.Create SampleApp', 'creator', 'Sample Form', 'Sample App Creation Form', SampleCreatorFormComponent),
  new FormRecord('SampleApp.SampleApp.action.Update SampleApp', 'action', 'Sample Form', 'Sample App Action Form', SampleActionFormComponent),
  new FormRecord('SampleApp.SampleApp.casedata.default', 'casedata', 'Sample Form', 'Sample App Data Form', SampleCasedataFormComponent),
  // new FormRecord('Partner Request.PartnerRequest.creator.New Product Notification', 'creator', 'New Partner Request Form', 'Create a new partner request', NewPartnerRequestFormComponent),
  // new FormRecord('Partner Request.PartnerRequest.casedata.default', 'casedata', 'Partner Request Details', 'Case Details Tab 1', PartnerRequestCasedataComponent),
  // new FormRecord('Partner Request.PartnerRequest.action.Update Request Metrics', 'action', 'Update Request Metrics', 'Update Request Metrics', UpdateRequestMetricsFormComponent),
];
