export interface User {
    id?: string;
    name: string;
    age: number;
    hobbies: any[];
    married: boolean;
}

export class UserForm {
    user: User;
    config: any = {
        name: {
            label: 'Naam',
            type: 'input',
            disabled: false,
            required: true
        },
        age: {
            label: 'Leeftijd',
            type: 'input',
            disabled: false,
            required: true
        },
        hobbies: {
            label: 'Hobbies',
            type: 'checkbox',
            disabled: false,
            required: false
        },
        married: {
            label: 'Getrouwd',
            type: 'boolean',
            disabled: false,
            required: false
        }
    };

    constructor(user: User) {
        this.user = {
            name: user.name || '',
            age: user.age || 0,
            hobbies: user.hobbies || [],
            married: user.married || false
        };
    }

    getFields() {
        let labels: any = [];
        for (var prop in this.config) {
            if (this.config.hasOwnProperty(prop)) {
                let label: any = {};
                label[prop] = {
                    label: this.config[prop].label,
                    type: this.config[prop].type
                };
                labels.push(label);
            }
        }
        return labels;
    }

    set(validators: any) {
        let form: any = {};
        for (var prop in this.user) {
            if (this.user.hasOwnProperty(prop)) {
                form[prop] = [{
                    value: this.user[prop],
                    disabled: this.config[prop].disabled
                }];
                if (this.config[prop].required) {
                    form[prop].push(validators.required)
                }
            }
        }
        return form;
    }
}
