import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MaterializeDirective } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { routing, appRoutingProviders } from './app.routing';

import { ServicesModule } from './services.module';

@NgModule({
    declarations: [
        MaterializeDirective,
        AppComponent,
        MainComponent
    ],
    imports: [
        BrowserModule,
        routing,
        HttpModule,
        FormsModule,
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
