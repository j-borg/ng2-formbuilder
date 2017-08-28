import { NgModule } from '@angular/core';
import { FormService } from './form/form.service';
import { UserService } from './user/user.service';

@NgModule({
    providers: [
        FormService,
        UserService
    ]
})

export class ServicesModule { }
