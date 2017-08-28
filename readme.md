## Angular2 FormBuilder service
- An implementation of the @angular/forms's FormBuilder


Define a model
```javascript
export interface User {
    id?: string;
    name: string;
    age: number;
    hobbies: any;
    married: boolean;
    mood: string;
}
```

Create form settings for the model (label, type, disabled, required)
```javascript
export const userFormSettings: any = {
    name:    new FormConfig('Naam',     'input',    false, true),
    age:     new FormConfig('Leeftijd', 'input',    false, true),
    married: new FormConfig('Getrouwd', 'boolean',  false, false),
    mood:    new FormConfig('Humeur',   'radio',    false, false, { 'Goed': false, 'Neutraal': false, 'Slecht': false}),
    hobbies: new FormConfig('Hobbies',  'checkbox', false, false, { 'Films': false, 'Slapen': false, 'Hardlopen': false })
};
```

Import Form class 
```javascript
import { Form } from '../form/form.model';
import { FormBuilder } from '@angular/forms';

// get user
return new Promise((resolve, reject) => {
    let userForm = new Form(user, userFormSettings);
    this.formFields = userForm.entity;
    resolve(userForm.set(this.formBuilder));
});
```