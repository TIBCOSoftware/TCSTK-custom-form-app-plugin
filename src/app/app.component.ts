import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ref: string = 'Partner Request.PartnerRequest.action.Update Request Metrics';
  data: any;
  dataJSON = '{"PartnerRequest": {"CaseMetrics_v1":{"Priority_v1":4,"DueDate_v1":"2019-05-22","Owner_v1":"jon@tibco.com","RequestOwnerEmail_v1":"jon@tibco.com","RequestOwnerSMS_v1":"55555","PartnerContactEmail_v1":"jon@tibco.com"},"state":"Created","PartnerReference_v1":"99000123","CaseId_v1":"PNR-74","Customer_v1":{"Name_v1":"Jon Werst","CustomerReference_v1":"Ref 1111","CustomerDetailsExtract_v1":"Customer 123","CustomerEmail_v1":"customer@customer.com"},"RequestDetails_v1":{"PartReference_v1":"Part-1","PartName_v1":"Part 1","PartDescription_v1":"A part","OrderReference_v1":"Order 1"},"RequestType_v1":"Account Enquiry"}}';
  submittedData: string;

  // ref = 'Partner Request.PartnerRequest.creator.New Product Notification';
  // ref = 'Partner Request.PartnerRequest.action.Update Request Metrics';

  // data: any = { formRef: 'Partner Request.PartnerRequest.casedata.default', formData: JSON.parse('{"RequestDescription_v1":"Please close my account","CaseMetrics_v1":{"Priority_v1":1,"DueDate_v1":"2019-05-09","Owner_v1":"Jon West","RequestOwnerEmail_v1":"jon@tibco.com","RequestOwnerSMS_v1":"0101001","PartnerContactEmail_v1":"jon@tibco.com"},"state":"Created","PartnerReference_v1":"99000123","RequestType_v1":"Product Recall","CaseId_v1":"PNR-62"}') };
  // data: any = {};
  /* data: any = {
    ProductDetails_v1: 'Hello',
    PartnerRequest: {
      CaseMetrics_v1: {
        Priority_v1: 3
      }
    }
  }*/
  // data: any = JSON.parse('{"PartnerRequest":{"RequestType_v1":"Packaging Supplies","RequestDescription_v1":"sdsdsd","Customer_v1":{"Name_v1":"asdasdsa","CustomerReference_v1":"asdsa-asda","CustomerDetailsExtract_v1":"sadsadas","CustomerEmail_v1":"sadas@sad.com"},"RequestDetails_v1":{"PartReference_v1":"sdsds","PartName_v1":"asdasdasdasd","PartDescription_v1":"sdsds","OrderReference_v1":"ORD-12121","IssueLog_v1":[{"LogEntry_v1":"sdsds"},{"LogEntry_v1":"dsds"}]},"CaseMetrics_v1":{"Priority_v1":4,"DueDate_v1":"2019-05-30","Owner_v1":"Jon West","RequestOwnerEmail_v1":"jon@tibco.com","RequestOwnerSMS_v1":"0101001","PartnerContactEmail_v1":"jon@tibco.com"}}}');
  // data: any = JSON.parse('{"PartnerRequest": {"CaseMetrics_v1":{"Priority_v1":4,"DueDate_v1":"2019-05-30","Owner_v1":"Jon West","RequestOwnerEmail_v1":"jon@tibco.com","RequestOwnerSMS_v1":"0101001","PartnerContactEmail_v1":"jon@tibco.com"},"state":"Created","PartnerReference_v1":"99000123","CaseId_v1":"PNR-62","Customer_v1":{"Name_v1":"asdasdsa","CustomerReference_v1":"asdsa-asda","CustomerDetailsExtract_v1":"sadsadas","CustomerEmail_v1":"sadas@sad.com"},"RequestDetails_v1":{"PartReference_v1":"sdsds","PartName_v1":"asdasdasdasd","PartDescription_v1":"sdsds","OrderReference_v1":"ORD-12121","IssueLog_v1":[{"LogEntry_v1":"test"},{"LogEntry_v1":"test2"}]},"RequestDescription_v1":"sdsdsd","RequestType_v1":"Rates & Transit Times"}}');
  // data: any = JSON.parse('{"PartnerRequest": {"CaseMetrics_v1":{"Priority_v1":4,"DueDate_v1":"2019-05-22","Owner_v1":"jon@tibco.com","RequestOwnerEmail_v1":"jon@tibco.com","RequestOwnerSMS_v1":"55555","PartnerContactEmail_v1":"jon@tibco.com"},"state":"Created","PartnerReference_v1":"99000123","CaseId_v1":"PNR-74","Customer_v1":{"Name_v1":"Jon Werst","CustomerReference_v1":"Ref 1111","CustomerDetailsExtract_v1":"Customer 123","CustomerEmail_v1":"customer@customer.com"},"RequestDetails_v1":{"PartReference_v1":"Part-1","PartName_v1":"Part 1","PartDescription_v1":"A part","OrderReference_v1":"Order 1"},"RequestType_v1":"Account Enquiry"}}');


  handleShowForm = () => {
    this.submittedData = undefined;
    this.data = JSON.parse(this.dataJSON);
  }

  handleReuseData = () => {
    this.dataJSON = JSON.stringify(this.submittedData);
  }

  handleSubmit = (data) => {
    console.log('Form submitted!: ', data);
    this.submittedData = data;
    this.data = undefined;
  }


}
