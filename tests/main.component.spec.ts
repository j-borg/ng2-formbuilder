import { TestBed } from '@angular/core/testing';

import { FormComponent } from '../src/app/form/form.component';

describe('HomeComponent', () => {
    beforeEach(() => TestBed.configureTestingModule({ declarations: [FormComponent] }));

    it('should instantiate the HomeComponent', () => {
        let fixture = TestBed.createComponent(FormComponent);
        expect(fixture.componentInstance instanceof FormComponent).toBe(true, 'should create HomeComponent');
    });
});
