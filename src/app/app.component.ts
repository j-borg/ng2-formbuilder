import { Component, OnInit } from '@angular/core';
import '../css/main.scss';

@Component({
    selector: 'app',
    template: require('./app.component.html')
})

export class AppComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        console.log('AppComponent initializing...');
    }
}
