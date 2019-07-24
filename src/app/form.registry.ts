import {BaseCustomFormComponent} from './form-components/base-custom-form/base-custom-form.component';
import {TemplateCreatorFormComponent} from './form-components/template-creator-form/template-creator-form.component';
import {TemplateActionFormComponent} from './form-components/template-action-form/template-action-form.component';
import {TemplateCasedataFormComponent} from './form-components/template-casedata-form/template-casedata-form.component';
// import {PartnerRequestCasedataComponent} from './sample-forms/partner-request-casedata/partner-request-casedata.component';
// import {NewPartnerRequestFormComponent} from './sample-forms/new-partner-request-form/new-partner-request-form.component';
// import {UpdateRequestMetricsFormComponent} from './sample-forms/update-request-metrics-form/update-request-metrics-form.component';


export class FormRecord {
  constructor(public id: string,
              public type: string,
              public name: string,
              public description: string,
              public component: any
  ) {
  }
}

/* When registering a custom form:
 * You must map the form reference to the form component by adding an entry to the FORM_REGISTRY object.
 *
 * You can get the form reference by running the generated form in case manager and looking at the console log.
 *
 * You will see entries like this (filter for *** Forms:)
 * *** Forms: > Using auto-rendered form (formRef): SampleApp.SampleApp.creator.Create SampleApp
 *
 * Note: type can be creator/action or casedata
 */

export const FORM_REGISTRY = [
  new FormRecord('default', 'creator', 'No Form Available', 'No form available to render', BaseCustomFormComponent),
  // new FormRecord('SampleApp.SampleApp.creator.Create SampleApp', 'creator', 'Sample Form', 'Sample App Creation Form', TemplateCreatorFormComponent),
  // new FormRecord('SampleApp.SampleApp.action.Update SampleApp', 'action', 'Sample Form', 'Sample App Action Form', TemplateActionFormComponent),
  // new FormRecord('SampleApp.SampleApp.casedata.default', 'casedata', 'Sample Form', 'Sample App Data Form', TemplateCasedataFormComponent),
  // new FormRecord('Partner Request.PartnerRequest.creator.New Product Notification', 'creator', 'New Partner Request Form', 'Create a new partner request', NewPartnerRequestFormComponent),
  // new FormRecord('Partner Request.PartnerRequest.casedata.default', 'casedata', 'Partner Request Details', 'Case Details Tab 1', PartnerRequestCasedataComponent),
  // new FormRecord('Partner Request.PartnerRequest.action.Update Request Metrics', 'action', 'Update Request Metrics', 'Update Request Metrics', UpdateRequestMetricsFormComponent),
];
