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
import {FORM_REGISTRY} from '../../form.registry';
import {FormRecord} from '../../form.registry';

@Component({
  selector: 'app-form-viewer',
  templateUrl: './form-viewer.component.html',
  styleUrls: ['./form-viewer.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class FormViewerComponent implements OnInit, OnChanges {

  @ViewChild('customFormContainer', { read: ViewContainerRef, static: true }) container;

  /* formApp: input is not used however, due to a bug (angular elements?) it must be passed in as form-app="''" or the form doesnt render properly */

  @Input() formApp: string;

 /* formRef: the form reference:
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

 /* data: The input data for the form
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

  /* formSubmitted: Outputs the data submitted by the form app as an event
   * Case Data forms should NOT emit any events since only creators/actions can change case data in Live Apps
   */

  @Output() formSubmitted: EventEmitter<any> = new EventEmitter<any>();

  componentRef;
  submitted = false;

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
        this.submitted = true;
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
  }

}
