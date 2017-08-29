import { FormConfig } from '../form/form.model';

export interface User {
    id?:     string;
    name:    string;
    age:     number;
    image:   string;
    hobbies: any;
    married: boolean;
    mood:    string;
}

export const userFormSettings: any = {
    name:       new FormConfig('Name',          'input',    false, true),
    age:        new FormConfig('Age',           'input',    false, true),
    mood:       new FormConfig('Mood',          'radio',    false, false,
        { 'Good': false, 'Neutral': false, 'Bad': false }),
    hobbies:    new FormConfig('Hobbies',       'checkbox', false, false,
        { 'Movies': false, 'Sleeping': false, 'Running': false }),
    image:      new FormConfig('Afbeelding',    'upload',   false, false),
    married:    new FormConfig('Married',       'switch',   false, false)
};
