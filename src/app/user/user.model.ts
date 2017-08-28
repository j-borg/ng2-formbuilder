import { FormConfig } from '../form/form.model';

export interface User {
    id?: string;
    name: string;
    age: number;
    hobbies: any;
    married: boolean;
    mood: string;
}

export const userFormSettings: any = {
    name:    new FormConfig('Naam',     'input',    false, true),
    age:     new FormConfig('Leeftijd', 'input',    false, true),
    married: new FormConfig('Getrouwd', 'boolean',  false, false),
    mood:    new FormConfig('Humeur',   'radio', false, false, { 'Goed': false, 'Neutraal': false, 'Slecht': false}),
    hobbies: new FormConfig(
        'Hobbies',  'checkbox', false, false, { 'Films': false, 'Slapen': false, 'Hardlopen': false }
    )
};
