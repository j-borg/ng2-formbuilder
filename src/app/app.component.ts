import { Component, OnInit } from '@angular/core';
var scss = require('../css/main.scss');

@Component({
    selector: 'app',
    styles: [`${scss}`],
    template: require('./app.component.html')
})

export class AppComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        console.log('AppComponent initializing...');
    }
}
