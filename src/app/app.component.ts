import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data: any = {};
  formRef = 'Partner Request.PartnerRequest.creator.New Product Notification';

  handleSubmit = (data) => {
    console.log('Form submitted!: ', data);
  }

}
