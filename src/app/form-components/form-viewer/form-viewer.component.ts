import {
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  Injector,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation
} from '@angular/core';
import {NewPartnerRequestFormComponent} from '../new-partner-request-form/new-partner-request-form.component';
import {PartnerRequestCasedataComponent} from '../partner-request-casedata/partner-request-casedata.component';
import {BaseCustomFormComponent} from '../base-custom-form/base-custom-form.component';
import {UpdateRequestMetricsFormComponent} from '../update-request-metrics-form/update-request-metrics-form.component';

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
  new FormRecord('Partner Request.PartnerRequest.creator.New Product Notification', 'creator', 'New Partner Request Form', 'Create a new partner request', NewPartnerRequestFormComponent),
  new FormRecord('Partner Request.PartnerRequest.casedata.default', 'casedata', 'Partner Request Details', 'Case Details Tab 1', PartnerRequestCasedataComponent),
  new FormRecord('Partner Request.PartnerRequest.action.Update Request Metrics', 'action', 'Update Request Metrics', 'Update Request Metrics', UpdateRequestMetricsFormComponent),

];

@Component({
  selector: 'app-form-viewer',
  templateUrl: './form-viewer.component.html',
  styleUrls: ['./form-viewer.component.css']
})

export class FormViewerComponent implements OnInit, OnChanges {

  @ViewChild('customFormContainer', { read: ViewContainerRef }) container;

  // formApp input is not used however, due to a bug (angular elements?) it must be passed in as form-app="''" or the form doesnt render properly

  @Input() formApp: string;

  /* the form reference:
   * format:
   * case creator:
   *    <applicationName>.<applicationInternalName>.creator.<processName>
   * case action:
   *    <applicationName>.<applicationInternalName>.action.<processName>
   * case data page:
   *    <applicationName>.<applicationInternalName>.casedata.<pageId>
   * <pageId> can be any id but is typically 'default'
   *
   * Form apps are declared in FORM_REGISTRY const above formRef -> Component
   */

  @Input() formRef: string;

  /* The input data for the form
   *
   * for a case action or creator process the data will include the top level 'caseType' object (PartnerRequest)
   * eg:
   * {
   *    PartnerRequest: {
   *      CaseId_v1: "PNR-37",
   *      CaseMetrics_v1: {
   *          Priority_v1: 2,
   *          DueDate_v1: "2019-03-15"
   *      },
   *      PartnerReference_v1: "99000123",
   *    }
   * }
   *
   * for a casedata form the top level 'caseType' object is not included (form apps should take this into account).
   *
   */

  @Input() data: any;

  /* Outputs the data submitted by the form app as an event
   * Case Data forms should NOT emit any events since only creators/actions can change case data in Live Apps
   */

  @Output() formSubmitted: EventEmitter<any> = new EventEmitter<any>();

  componentRef;

  constructor(private resolver: ComponentFactoryResolver, private injector: Injector, private location: ViewContainerRef) { }

  public handleSubmit = (formdata: any) => {
    this.formSubmitted.emit(formdata);
  }

  ngOnChanges(changes: SimpleChanges) {
    // select the correct form based on the input parameters

    if (changes.formRef && this.data && this.formRef) {
      this.container.clear();
      // get the correct form from the library
      let selectedFormRec: FormRecord = FORM_REGISTRY.find((form) => {
        return form.id === this.formRef;
      });
      if (!selectedFormRec) {
        // if no form available show a default form
        selectedFormRec = FORM_REGISTRY.find((form) => {
          return form.id === 'default';
        });
        console.warn('Using default as no form in registry');
      }
      const factory = this.resolver.resolveComponentFactory(selectedFormRec.component);
      this.componentRef = this.container.createComponent(factory);
      // input mapping
      this.componentRef.instance.data = this.data;
      // output mapping
      this.componentRef.instance.formSubmitted.subscribe(data => {
        this.formSubmitted.emit(data);
      });
    } else if (changes.data && !changes.data.firstChange) {
      // handle a change to the data (refresh) - typically used on a casedata form
      if (this.componentRef.instance.updateData) {
        this.componentRef.instance.updateData(changes.data.currentValue);
      }
    }
  }

  ngOnInit() {
    console.log('Form module init');
  }

}
