import { TestBed } from '@angular/core/testing';

import { MainComponent } from '../src/app/main/main.component';

describe('HomeComponent', () => {
    beforeEach(() => TestBed.configureTestingModule({ declarations: [MainComponent] }));

    it('should instantiate the HomeComponent', () => {
        let fixture = TestBed.createComponent(MainComponent);
        expect(fixture.componentInstance instanceof MainComponent).toBe(true, 'should create HomeComponent');
    });
});
