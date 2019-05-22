import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';

declare const VERSION: string;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Version: ' + VERSION;

  // data: any = { formRef: 'Partner Request.PartnerRequest.casedata.default', formData: JSON.parse('{"RequestDescription_v1":"Please close my account","CaseMetrics_v1":{"Priority_v1":1,"DueDate_v1":"2019-05-09","Owner_v1":"Jon West","RequestOwnerEmail_v1":"jon@tibco.com","RequestOwnerSMS_v1":"0101001","PartnerContactEmail_v1":"jon@tibco.com"},"state":"Created","PartnerReference_v1":"99000123","RequestType_v1":"Product Recall","CaseId_v1":"PNR-62"}') };
  // ref = 'Partner Request.PartnerRequest.creator.New Product Notification';
  ref = 'Partner Request.PartnerRequest.actiona.Update Request Metrics';
  // data: any = {};
  /* data: any = {
    ProductDetails_v1: 'Hello',
    PartnerRequest: {
      CaseMetrics_v1: {
        Priority_v1: 3
      }
    }
  }*/
  data: any = JSON.parse('{"PartnerRequest":{"RequestType_v1":"Packaging Supplies","RequestDescription_v1":"sdsdsd","Customer_v1":{"Name_v1":"asdasdsa","CustomerReference_v1":"asdsa-asda","CustomerDetailsExtract_v1":"sadsadas","CustomerEmail_v1":"sadas@sad.com"},"RequestDetails_v1":{"PartReference_v1":"sdsds","PartName_v1":"asdasdasdasd","PartDescription_v1":"sdsds","OrderReference_v1":"ORD-12121","IssueLog_v1":[{"LogEntry_v1":"sdsds"},{"LogEntry_v1":"dsds"}]},"CaseMetrics_v1":{"Priority_v1":4,"DueDate_v1":"2019-05-30","Owner_v1":"Jon West","RequestOwnerEmail_v1":"jon@tibco.com","RequestOwnerSMS_v1":"0101001","PartnerContactEmail_v1":"jon@tibco.com"}}}');
  data2: any = {
    ProductDetails_v1: 'Hello2',
    PartnerRequest: {
      CaseMetrics_v1: {
        Priority_v1: 3
      }
    }
  }
  // data: any = JSON.parse('{"RequestDescription_v1":"Please close my account","CaseMetrics_v1":{"Priority_v1":1,"DueDate_v1":"2019-05-09","Owner_v1":"Jon West2","RequestOwnerEmail_v1":"jon@tibco.com","RequestOwnerSMS_v1":"0101001","PartnerContactEmail_v1":"jon@tibco.com"},"state":"Created","PartnerReference_v1":"99000123","RequestType_v1":"Product Recall","CaseId_v1":"PNR-63"}');
  // formRef = 'Partner Request.PartnerRequest.casedata.default';
  formRef = 'form1';
  handleSubmit = (data) => {
    console.log('Form submitted!: ', data);
  }

  updateData = () => {
    this.data = this.data2;
  }

}
