import {
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  Injector,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {NewPartnerRequestFormComponent} from '../new-partner-request-form/new-partner-request-form.component';

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
  new FormRecord('default', 'creator', 'New Partner Request Form', 'Create a new partner request', NewPartnerRequestFormComponent),
  new FormRecord('form1', 'creator', 'New Partner Request Form', 'Create a new partner request', NewPartnerRequestFormComponent)
];

@Component({
  selector: 'app-form-viewer',
  templateUrl: './form-viewer.component.html',
  styleUrls: ['./form-viewer.component.css']
})

export class FormViewerComponent implements OnInit {

  @ViewChild('customFormContainer', { read: ViewContainerRef }) container;

  @Input() formId: string;
  @Input() data: any;
  @Output() formSubmitted: EventEmitter<any> = new EventEmitter<any>();

  constructor(private resolver: ComponentFactoryResolver, private injector: Injector, private location: ViewContainerRef) { }


  public handleSubmit = (formdata: any) => {
    this.formSubmitted.emit(formdata);
  }

  ngOnInit() {
    this.container.clear();
    // get the correct for from the library
    let selectedFormRec: FormRecord = FORM_REGISTRY.find((form) => {
      return form.id === this.formId;
    });
    if (!selectedFormRec) {
      // use default
      selectedFormRec = FORM_REGISTRY.find((form) => {
        return form.id === 'default';
      });
    }
    const factory = this.resolver.resolveComponentFactory(selectedFormRec.component);
    const componentRef = this.container.createComponent(factory);
    // input mapping
    componentRef.instance.data = this.data;
    // output mapping
    componentRef.instance.formSubmitted.subscribe(data => {
      this.formSubmitted.emit(data);
    });
  }

}
