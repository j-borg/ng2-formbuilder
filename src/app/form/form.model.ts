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
        Object.keys(this.entity).forEach((key) => {
            this.entity[key].type === 'checkbox'
                ? form[key] = formBuilder.group(this.getCheckboxes(this.entity[key].value, key))
                : form[key] = this.setValues(this.entity, key);
        });
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
        Object.keys(object).forEach((key) => checkboxes[key] = this.setValues(object, key, prop));
        return checkboxes;
    }
}
