import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Components */
import { FormComponent } from './form.component';
import { ImageUploadComponent } from '../imageUpload/imageUpload.component';

/* Services */
import { FormService } from './form.service';

/* Pipes */
import { ObjectKeysPipe } from '../pipes/objectKeys.pipe';

@NgModule({
    declarations: [
        FormComponent,
        ImageUploadComponent,
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
        ImageUploadComponent,
        ObjectKeysPipe
    ],
    bootstrap: [
        FormComponent
    ]
})

export class FormBuilderModule {}
