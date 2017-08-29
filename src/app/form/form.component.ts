import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from './form.service';

var scss = require('./form.component.scss');

@Component({
    selector: 'form-builder',
    template: require('./form.component.html'),
    styles: [`${scss}`]
})
export class FormComponent implements OnInit {
    private form: FormGroup;
    private submitted: boolean;

    @Input() entity: any;
    @Input() settings: any;

    @Output() saveForm = new EventEmitter<string>();

    constructor(private formService: FormService) { }

    ngOnInit() {
        this.form = this.formService.init(this.entity, this.settings);
    }

    getType(field: string, type: string) {
        return this.formService.fields[field].type === type;
    }

    getRadio(field: string) {
        return this.formService.fields[field].preset;
    }

    getLabel(field: string) {
        return this.formService.fields[field].label;
    }

    isValid(field: any) {
        return field.valid || field.disabled || (field.pristine && !this.submitted);
    }

    imageUploaded($event: any, input: string) {
        this.form.controls[input].setValue($event);
    }

    submit() {
        this.form.valid ? console.log('valid!', this.form.value) : console.log('not valid!');
        this.saveForm.emit(this.form.value);
    }
}
