import { Component, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from './form.service';

var scss = require('./form.component.scss');

@Component({
    selector: 'form-builder',
    template: `<div *ngIf="form">
    <form [formGroup]="form">
        <h1 [innerHTML]="hasValues(entity) ? 'Bewerken' : 'Nieuw'"></h1>
        <div *ngFor="let input of form.controls | keys; let i = index;" class="row">
            <div *ngIf="getType(input, 'input')" class="input-field">
                <p>
                    <input name="{{input}}" type="text" formControlName="{{input}}" />
                    <label for="{{input}}" [innerHTML]="getLabel(input)"></label>
                </p>
            </div>

            <div *ngIf="getType(input, 'checkbox')" formGroupName="{{input}}" class="input-field">
                <label [innerHTML]="getLabel(input)"></label>
                <p *ngFor="let option of form.controls[input].controls | keys; let j = index;">
                    <input name="{{option}}" id="{{option}}" type="checkbox" formControlName="{{option}}" />
                    <label for="{{option}}" [innerHTML]="option"></label>
                </p>
            </div>

            <div *ngIf="getType(input, 'upload')" class="input-field upload">
                <label [innerHTML]="getLabel(input)"></label>
                <upload (imageUploaded)="imageUploaded($event, input)" [content]="input._value"></upload>
            </div>

            <div *ngIf="getType(input, 'radio')" class="input-field">
                <label [innerHTML]="getLabel(input)"></label>
                <p *ngFor="let option of getRadio(input) | keys; let j = index;">
                    <input type="radio" id="{{option}}" name="{{input}}" [value]="option" formControlName="{{input}}" />
                    <label for="{{option}}" [innerHTML]="option"></label>
                </p>
            </div>

            <div *ngIf="getType(input, 'switch')" class="switch">
                <label [innerHTML]="getLabel(input)"></label>
                <label>
                    Nee
                    <input type="checkbox" name="{{input}}" formControlName="{{input}}" />
                    <span class="lever"></span>
                    Ja
                </label>
            </div>

            <small class="error" [ngClass]="{'block': !isValid(form.controls[input])}" [hidden]="isValid(form.controls[input])" [innerHTML]="getLabel(input) + ' is verplicht'"></small>
        </div>
        <div class="row">
            <button class="btn" (click)="submit()">Opslaan</button>
        </div>
    </form>
</div>
`,
    styles: [`${scss}`]
})
export class FormComponent implements OnChanges {
    private form: FormGroup;
    private submitted: boolean;

    @Input() entity: any;
    @Input() settings: any;

    @Output() saveForm = new EventEmitter<string>();

    constructor(private formService: FormService) { }

    ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
        for (let propName in changes) {
            this[propName] = changes[propName].currentValue;
        }
        if (this.entity && this.settings) {
            this.initForm();
        }
    }

    initForm() {
        this.form = this.formService.init(this.entity, this.settings);
    }

    hasValues(object: any) {
        return Object.keys(object).length;
    }

    getType(field: string, type: string) {
        return this.formService.fields[field].type === type;
    }

    getRadio(field: string) {
        return this.formService.fields[field].presets;
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
