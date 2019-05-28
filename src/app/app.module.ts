import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, Injector, Injectable, NgModule} from '@angular/core';

import { BaseCustomFormComponent } from './form-components/base-custom-form/base-custom-form.component';
import {NewPartnerRequestFormComponent} from './form-components/new-partner-request-form/new-partner-request-form.component';
import {createCustomElement} from '@angular/elements';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatDialogModule,
  MatIconModule, MatIconRegistry,
  MatInputModule,
  MatListModule,
  MatMenuModule, MatNativeDateModule,
  MatOptionModule, MatProgressSpinnerModule,
  MatSelectModule, MatSliderModule, MatStepperModule,
  MatToolbarModule,
  MatTooltipModule, NativeDateAdapter,
  MAT_DATE_FORMATS, MAT_DATE_LOCALE
} from '@angular/material';
import {MatMomentDateModule, MomentDateAdapter, MAT_MOMENT_DATE_FORMATS, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FORM_REGISTRY, FormViewerComponent} from './form-components/form-viewer/form-viewer.component';
import { PartnerRequestCasedataComponent } from './form-components/partner-request-casedata/partner-request-casedata.component';
import {UpdateRequestMetricsFormComponent} from './form-components/update-request-metrics-form/update-request-metrics-form.component';
import {AppComponent} from './app.component';
import {NewExpenseClaimFormComponent} from './form-components/new-expense-claim-form/new-expense-claim-form.component';
import {Moment} from 'moment';


// Custom DateAdapter
import {DateAdapter} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';

@Injectable()
export class CustomDateAdapter extends MomentDateAdapter {

  parse(value: any, parseFormat: string | string[]): Moment | null {
    const dateFormat: string | string[] = 'YYYY-MM-DD';
    return super.parse(value, dateFormat);
  }

  format(date: Moment, displayFormat: string): string {
    const dateFormat: string | string[] = 'YYYY-MM-DD';
    return super.format(date, dateFormat);
  }

}

@NgModule({
  declarations: [
    AppComponent,
    BaseCustomFormComponent,
    NewPartnerRequestFormComponent,
    FormViewerComponent,
    PartnerRequestCasedataComponent,
    UpdateRequestMetricsFormComponent,
    NewExpenseClaimFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatOptionModule,
    MatDialogModule,
    MatMenuModule,
    MatCardModule,
    MatTooltipModule,
    MatStepperModule,
    MatSliderModule,
    MatDatepickerModule,
    FormsModule,
    FlexLayoutModule,
    ScrollingModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    HttpClientModule
  ],
  exports: [MatDatepickerModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    // Comment out the line below to turn off UTC:
    {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}},
    {
      provide: DateAdapter,
      useClass: CustomDateAdapter,
      // useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS}
    /*
    {
      provide: DateAdapter, useClass: CustomDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS
    }*/
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    BaseCustomFormComponent, FormViewerComponent, NewPartnerRequestFormComponent, PartnerRequestCasedataComponent, UpdateRequestMetricsFormComponent, NewExpenseClaimFormComponent
  ]
})

export class AppModule {

  constructor(private injector: Injector, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIconLiteral(
      'tcs-close-icon',
      this.domSanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">\n' +
        '  <path class="svg-content" fill="#727272" d="M21.483 5.012L14.495 12l6.988 6.987a1.766 1.766 0 0 1-2.495 2.495L12 14.495l-6.987 6.987a1.766 1.766 0 0 1-2.495-2.495L9.504 12 2.517 5.012a1.765 1.765 0 0 1 2.495-2.495L12 9.504l6.987-6.987a1.765 1.765 0 0 1 2.495 2.495"/>\n' +
        '  <path fill="none" d="M0 0h24v24H0z"/>\n' +
        '</svg>\n')
    );
  }

  /*ngDoBootstrap() {
    if (!customElements.get('custom-form')) {
      console.log('bootstrapping');
      console.log(customElements);
      const el = createCustomElement(FormViewerComponent,
        {injector: this.injector});
      customElements.define('custom-form', el);
    } else {
      console.log('already bootstrapped');
    }
  }*/
}
