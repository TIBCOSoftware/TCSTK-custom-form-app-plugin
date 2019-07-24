/**
 * This application can be used develop and test form apps without the rest of the cloud starters framework
 *
 * When development is completed a form_package.js can be created (Angular element) and this can be used
 * within a Cloud Starter application to replace a:
 *
 * - Creator Form
 * - Action Form
 * - Case Data page (read only form)
 *
 * Using this test application:
 *
 * If you form uses Tibco Cloud Live Apps API calls then enter the CONST for EMAIL_ID_KEY/CLIENT_ID_KEY/PW
 * ** DON'T check these in to source control!
 *
 * To start the test app run:
 * npm run serve_eu
 * or
 * npm run serve_us
 *
 * Then access via https://localhost:7200
 *
 * You can then select a formRef, enter payload (case data)_and show form
 *
 * To add a new custom form app:
 *
 * - Add new components to the project extending base-custom-form-component.ts
 * - Register new components in form-viewer.component.ts (const FORM_REGISTRY)
 * - Add new components to entryComponents in app.module.ts
 *
 * You should then be able to select your new component and run it using the test app
 *
 *
 * Integrating into Cloud Starters:
 *
 * npm run build:elements will create src/app/assets/form-package.js
 *
 * - copy this file to the cloud starter (src/app/assets folder)
 * - add to index.html
 * - edit the src/app/assets/formConfig.js to add new formRefs
 * - the cloud starter will then call the "form-viewer" component in place of the form and pass the ref + data structure
 */

import {
  Component,
  OnInit,
} from '@angular/core';
import { FORM_REGISTRY } from './form.registry';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

// If you use these DO NOT check them in to a source control repo!
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
  ref = 'SampleApp.SampleApp.creator.Create SampleApp';
  data: any;
  // set to default data for test app
  dataJSON = '{"SampleApp":{"field1":"1","field2":"2","field3":"3"}}';
  submittedData: string;
  appReady = false;

  // shows the form
  handleShowForm = () => {
    this.submittedData = undefined;
    this.data = JSON.parse(this.dataJSON);
  }

  // sets data to the data previous submitted by the form
  handleReuseData = () => {
    this.dataJSON = JSON.stringify(this.submittedData);
  }

  // handles submit of form
  handleSubmit = (data) => {
    this.submittedData = data;
    this.data = undefined;
  }


  // login to tibco cloud
  // only used for dev purposes if Tibco Live Apps API calls required

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
        console.error('Login failed: ', error);
      });
    } else {
      this.appReady = true;
    }
  }


}
