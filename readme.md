## Angular2 FormBuilder Component
Module with implementation of the @angular/forms's FormBuilder

https://www.npmjs.com/package/@gdn/form-builder

## Supports following form fields
- Input
- Switch
- Radio
- Checkbox
- Upload (FileStack)

### 1. Define a model
```javascript
export interface User {
    id?: string;
    name: string;
    age: number;
    image: string;
    hobbies: any;
    married: boolean;
    mood: string;
}
```

### 2. Create form settings for the model (label, type, disabled, required, presets)
```javascript
export const userFormSettings: any = {
    name:       new FormConfig({label: 'Name',       type: 'input',  disabled: false, required: true}),
    age:        new FormConfig({label: 'Age',        type: 'input',  disabled: false, required: true}),
    image:      new FormConfig({label: 'Afbeelding', type: 'upload', disabled: false, required: false}),
    married:    new FormConfig({label: 'Married',    type: 'switch', disabled: false, required: false}),
    mood:       new FormConfig({label: 'Mood',       type: 'radio',  disabled: false, required: false,
        presets: { 'Good': false, 'Neutral': false, 'Bad': false }}),
    hobbies:    new FormConfig({label: 'Hobbies', type: 'checkbox', disabled: false, required: false,
        presets: { 'Movies': false, 'Sleeping': false, 'Running': false }})
};
```

### 3. Add form builder element with entity from db/api and settings @Input() and saveForm @Output()

If the entity is an empty object the form be empty for a new document. If the entity has key, the form will be filled in and you can edit the existing entity. 

```html
<form-builder [entity]="user" [settings]="userFormSettings" (saveForm)="saveForm($event)"></form-builder>
```

### 4. Result
![Afbeelding](src/app/images/form-builder.png)
