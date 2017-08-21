import { NgModule } from '@angular/core';
import { MainService } from './main/main.service';
import { ApiService } from './api/api.service';

@NgModule({
    providers: [
        MainService,
        ApiService
    ]
})

export class ServicesModule { }
