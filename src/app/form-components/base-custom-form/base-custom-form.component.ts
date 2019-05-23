import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-base-custom-form',
  templateUrl: './base-custom-form.component.html',
  styleUrls: ['./base-custom-form.component.css']
})
export class BaseCustomFormComponent {

  @Input() data: any;
  @Output() formSubmitted: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Access a deep value inside a object
   * Works by passing a path like "foo.bar", also works with nested arrays like "foo[0][1].baz"
   * @author Victor B. https://gist.github.com/victornpb/4c7882c1b9d36292308e
   * Unit tests: http://jsfiddle.net/Victornpb/0u1qygrh/
   */
  getDeepVal = (obj, path) => {
    if (typeof obj === 'undefined' || obj === null) {
      return;
    }
    path = path.split(/[\.\[\]\"\']{1,2}/);
    for (let i = 0, l = path.length; i < l; i++) {
      if (path[i] === '') { continue; }
      obj = obj[path[i]];
      if (typeof obj === 'undefined' || obj === null) { return; }
    }
    return obj;
  }

  public onSubmit = (formdata: any) => {
    console.log('Source event fired');
    this.formSubmitted.emit(formdata);
    console.log(formdata);
  }
}
