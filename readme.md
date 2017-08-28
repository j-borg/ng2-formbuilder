## Angular2 FormBuilder Component
An implementation of the @angular/forms's FormBuilder

## Supports following form fields
- Input
- Switch (boolean)
- Radio
- Checkbox

### 1. Define a model
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

### 2. Create form settings for the model (label, type, disabled, required, presets)
```javascript
export const userFormSettings: any = {
    name:    new FormConfig('Name',     'input',    false, true),
    age:     new FormConfig('Age',      'input',    false, true),
    married: new FormConfig('Married',  'boolean',  false, false),
    mood:    new FormConfig('Mood',     'radio',    false, false, { 'Goed': false, 'Neutraal': false, 'Slecht': false}),
    hobbies: new FormConfig('Hobbies',  'checkbox', false, false, { 'Films': false, 'Slapen': false, 'Hardlopen': false })
};
```

### 3. Get entity from database/API or create new entity with empty object

### 4. Add form builder element with entity and settings @Input() and saveForm @Output()
```html
<form-builder *ngIf="user" [entity]="user" [settings]="userFormSettings" (saveForm)="saveForm($event)"></form-builder>
```