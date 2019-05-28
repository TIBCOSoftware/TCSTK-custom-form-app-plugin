import {
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  Injector,
  Input, OnInit,
  Output,
  ViewContainerRef,
  ViewEncapsulation
} from '@angular/core';
import { FORM_REGISTRY } from './form-components/form-viewer/form-viewer.component';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

export const EMAIL_ID_KEY = '';
export const CLIENT_ID_KEY = '';
export const PW = '';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient) { }

  formRegistry = FORM_REGISTRY;
  ref = 'Expenses.Expenses.creator.Create Expenses';
  data: any;
  dataJSON = '{"Expenses":{"ExpenseItem":{"Description":"iPhone 8","DateOfExpense":"2019-05-24","ReceiptAvailable":"Yes","Amount":555},"ClaimantName":"John Smith","DepartmentCode":"12333"}}';
  submittedData: string;
  appReady = false;

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


  // login to tibco cloud

  public login(username, password, clientID): Observable<any> {
    localStorage.setItem(EMAIL_ID_KEY, username);
    localStorage.setItem(CLIENT_ID_KEY, clientID);


    const url = '/idm/v3/login-oauth';
    const body = new HttpParams()
      .set('Email', username)
      .set('Password', password)
      .set('TenantId', 'bpm')
      .set('ClientID', clientID);
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(url, body.toString(), { headers });
  }

  ngOnInit(): void {
    // This login is purely for testing forms that need to connect to Tibco Live Apps Services directly
    // it will not be used when the forms adapter is created
    if (EMAIL_ID_KEY && PW && CLIENT_ID_KEY) {
      this.login(EMAIL_ID_KEY, PW, CLIENT_ID_KEY).subscribe(next => {
        console.log('Login: ', next);
        this.appReady = true;
      },
        error => {
        console.log('Login failed: ', error);
      });
    } else {
      this.appReady = true;
    }
  }


}
