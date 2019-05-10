# CustomFormApp

This app can be used to create a seperate Angular Elements Application to add custom form applications to a Cloud Starter.

The app can be used to display a component in the place of a form:

interface:

@Input(): data:any - the data object passed to the form component from Cloud Starter App
@Output(): formSubmitted - the event raised by the form component containing output data

1) Create the form app plugin:

- Add new components extending base-custom-form-component.ts
- Register new components in form-viewer.component.ts
- Add new components to entryComponents in app.module.ts

2) Build element:

  npm run build:elements

3) Copy assets/form-package.js and assets/styles.css to your cloud starter app assets folder

4) Load the JS in Cloud Starter index.html:

<script src="assets/form-package.js"></script>

The cloud starter can then invoke the element form using:
 <custom-form [formId]="customFormId" [data]="data" (formSubmitted)="submitForm($event.detail)"></custom-form>


Notes: 

- Since the plugin is an element (Web Component), you could use another framework to create this form plugin.
- You can host the JS externally and hence update the form app without updating the Cloud Starter.

