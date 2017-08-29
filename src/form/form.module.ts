import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Components */
import { FormComponent } from './form.component';
import { UploadComponent } from '../upload/upload.component';

/* Services */
import { FormService } from './form.service';

/* Pipes */
import { ObjectKeysPipe } from '../pipes/objectKeys.pipe';

@NgModule({
    declarations: [
        FormComponent,
        UploadComponent,
        ObjectKeysPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        FormService
    ],
    exports: [
        FormComponent,
        UploadComponent,
        ObjectKeysPipe
    ],
    bootstrap: [
        FormComponent
    ]
})

export class FormBuilderModule {}
