import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
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

    constructor(private formService: FormService,
        private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.entity = this.router.url.split('/')[1];
        this.sub = this.route.params
            .switchMap((params: Params) => this.formService.subscribe(this.entity, params.id))
            .subscribe((form: any) => { this.form = form; console.log(form); });
    }

    ngOnDestroy() {
        if (this.sub) { this.sub.unsubscribe(); }
    }
}
