import { Validators } from '@angular/forms';

export class FormConfig {
    label: string;
    type: string;
    disabled: boolean;
    required: boolean;

    constructor(label: string, type: string, disabled: boolean, required: boolean) {
        this.label = label;
        this.type = type;
        this.disabled = disabled;
        this.required = required;
    }
}

export class Form {
    entity: any;

    constructor(entity: any, formSettings: any) {
        delete entity.id;
        this.entity = {};
        for (var prop in entity) {
            if (entity.hasOwnProperty(prop)) {
                let values = formSettings[prop];
                values.value = entity[prop];
                this.entity[prop] = values;
            }
        }
    }

    getFields() {
        let fields: any = {};
        for (var prop in this.entity) {
            if (this.entity.hasOwnProperty(prop)) {
                fields[prop] = { label: this.entity[prop].label, type: this.entity[prop].type };
            }
        }
        return fields;
    }

    set(formBuilder: any) {
        let form: any = {};
        for (var prop in this.entity) {
            if (this.entity.hasOwnProperty(prop)) {
                if (this.entity[prop].type === 'checkbox') {
                    form[prop] = formBuilder.group(this.getCheckboxes(this.entity[prop].value, prop));
                } else {
                    form[prop] = this.setValues(this.entity, prop);
                }
            }
        }
        return formBuilder.group(form);
    }

    setValues(object: any, prop: string, parentProp?: string) {
        let field: any = [
            { value: (object[prop].value || object[prop]), disabled: this.entity[parentProp || prop].disabled }
        ];
        if (this.entity[parentProp || prop].required) {
            field.push(Validators.required);
        }
        return field;
    }

    private getCheckboxes(object: any, prop: string) {
        let checkboxes: any = {};
        for (var check in object) {
            if (object.hasOwnProperty(check)) {
                checkboxes[check] = this.setValues(object, check, prop);
            }
        }
        return checkboxes;
    }
}
