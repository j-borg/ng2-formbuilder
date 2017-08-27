import { Injectable } from '@angular/core';
import { User, UserForm } from '../user/user.model';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Injectable()
export class FormService {
    user: any = [{
        'name': 'John Doe',
        'age': 31,
        'hobbies': ['fishing', 'movies'],
        'married': false
    } as User];

    formFields: any;

    constructor(private formBuilder: FormBuilder) { }

    get fields() {
        return this.formFields;
    }

    subscribe(entity: string, id: any) {
        return new Promise((resolve, reject) => {
            let object = this[entity].filter((obj: any) => obj.id = id);
            let userForm = new UserForm(object[0]);
            this.formFields = userForm.getFields();
            resolve(this.formBuilder.group(userForm.set(Validators)));
        });
    }
}
