import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormService } from './form.service';

var scss = require('./form.component.scss');

@Component({
    selector: 'form-component',
    template: require('./form.component.html'),
    styles: [`${scss}`]
})
export class FormComponent implements OnInit, OnDestroy {
    private sub: any;
    private entity: any;
    private form: FormGroup;
    private submitted: boolean;

    constructor(private formService: FormService,
        private router: Router,
        private route: ActivatedRoute,
        private zone: NgZone) { }

    ngOnInit() {
        this.entity = this.router.url.split('/')[1];
        this.sub = this.route.params
            .switchMap((params: Params) => this.formService.subscribe(this.entity, params.id))
            .subscribe((form: any) => { this.form = form; console.log(this.form) });
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

    submit() {
        this.form.valid ? console.log('valid!', this.form.value) : console.log('not valid!');
    }

    ngOnDestroy() {
        if (this.sub) { this.sub.unsubscribe(); }
    }
}
