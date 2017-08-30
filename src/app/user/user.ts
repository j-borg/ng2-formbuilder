import { FormConfig } from '../../form/form';

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
    name:       new FormConfig({label: 'Name',       type: 'input',  disabled: false, required: true}),
    age:        new FormConfig({label: 'Age',        type: 'input',  disabled: false, required: true}),
    image:      new FormConfig({label: 'Afbeelding', type: 'upload', disabled: false, required: false}),
    married:    new FormConfig({label: 'Married',    type: 'switch', disabled: false, required: false}),
    mood:       new FormConfig({label: 'Mood',       type: 'radio',  disabled: false, required: false,
        presets: { 'Good': false, 'Neutral': false, 'Bad': false }}),
    hobbies:    new FormConfig({label: 'Hobbies', type: 'checkbox', disabled: false, required: false,
        presets: { 'Movies': false, 'Sleeping': false, 'Running': false }})
};