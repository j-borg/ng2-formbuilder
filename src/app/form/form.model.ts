import { Validators } from '@angular/forms';

export class FormConfig {
    label: string;
    type: string;
    disabled: boolean;
    required: boolean;
    preset: any;

    constructor(label: string, type: string, disabled: boolean, required: boolean, preset?: any) {
        this.label = label;
        this.type = type;
        this.disabled = disabled;
        this.required = required;
        if (preset) {
            this.preset = preset;
        }
    }
}

export class Form {
    entity: any;

    constructor(entity: any, formSettings: any) {
        delete entity.id;
        this.entity = {};
        Object.keys(formSettings).forEach((key) => {
            let values = formSettings[key];
            values.value = entity[key] || formSettings[key].preset || '';
            this.entity[key] = values;
        });
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
        let value: any = (object[prop].value === 'undefined' || parentProp) ? object[prop] : object[prop].value;
        let field: any = [{ value: value, disabled: this.entity[parentProp || prop].disabled }];
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
