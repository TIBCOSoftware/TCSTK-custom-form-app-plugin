# TIBCO Cloud™ Starters Toolkit -- Custom Form App Plugin

This app can be used to create a seperate Angular Elements Application to add custom form applications to a Cloud Starter.

The app can be used to display a component in the place of a form:

interface:

@Input(): data:any - the data object passed to the form component from Cloud Starter App
@Output(): formSubmitted - the event raised by the form component containing output data

1) Create the form app plugin:

- You can use schematics to create a new action/creator/casedata form component

*OR* you can manually create form components by:

- Add new components extending base-custom-form-component.ts
- Register new components in form.registry.ts
- Add new components to entryComponents in app.module.ts/app.module.dev/app.module.build

2) Test the form using npm run serve_eu 
   (you can configure the default selection and input data in app.component)

3) Create Web Components js (form-package.js):

  npm run build:elements

4) Copy assets/form-package.js and assets/styles.css to your cloud starter app assets folder

5) Load the JS in Cloud Starter index.html:

<script src="assets/form-package.js"></script>

6) Edit the Cloud Starter Toolkit Applications's customForms.json to include the new form references

Notes: 

- Since the plugin is an element (Web Component), you could use another framework to create this form plugin.

/*
* Copyright © 2019. TIBCO Software Inc.
* This file is subject to the license terms contained
* in the license file that is distributed with this file.
 */

