import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-base-custom-form',
  templateUrl: './base-custom-form.component.html',
  styleUrls: ['./base-custom-form.component.css']
})
export class BaseCustomFormComponent {

  @Input() data: any;
  @Output() formSubmitted: EventEmitter<any> = new EventEmitter<any>();

  public onSubmit = (formdata: any) => {
    console.log('Source event fired');
    this.formSubmitted.emit(formdata);
  }
}
