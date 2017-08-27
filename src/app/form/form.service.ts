import { Injectable } from '@angular/core';
import { User, userFormSettings } from '../user/user.model';
import { Form } from '../form/form.model';
import { FormBuilder } from '@angular/forms';

@Injectable()
export class FormService {
    user: any = [{
        'id': '123',
        'name': 'John Doe',
        'age': 31,
        'hobbies': { 'Vissen': true, 'Films': true, 'Slapen': false, 'Hardlopen': false },
        'married': true
    } as User];

    formFields: any;

    constructor(private formBuilder: FormBuilder) { }

    get fields() {
        return this.formFields;
    }

    subscribe(entity: string, id: any) {
        return new Promise((resolve, reject) => {
            let object = this[entity].filter((obj: any) => obj.id === id);
            let userForm = new Form(object[0], userFormSettings);
            this.formFields = userForm.getFields();
            resolve(userForm.set(this.formBuilder));
        });
    }
}
