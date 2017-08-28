import { Injectable } from '@angular/core';
import { Form } from '../form/form.model';
import { FormBuilder } from '@angular/forms';

@Injectable()
export class FormService {
    formFields: any;

    constructor(private formBuilder: FormBuilder) { }

    get fields() {
        return this.formFields;
    }

    init(entity: any, settings: any) {
        let userForm = new Form(entity, settings);
        this.formFields = userForm.entity;
        return userForm.set(this.formBuilder);
    }
}
