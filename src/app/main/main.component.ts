import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';

@Component({
    selector: 'main',
    template: require('./main.component.html')
})

export class MainComponent implements OnInit {
    list: any;
    constructor(private mainService: MainService) { }

    ngOnInit() {
        this.mainService.getList().then((result) => {
            console.log('success', result);
        }).catch((error) => {
            console.log('error', error);
        });
    }
}
