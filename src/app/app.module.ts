import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterializeDirective } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { routing, appRoutingProviders } from './app.routing';

import { ServicesModule } from './services.module';

@NgModule({
    declarations: [
        MaterializeDirective,
        AppComponent,
        FormComponent
    ],
    imports: [
        BrowserModule,
        routing,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        ServicesModule
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}
