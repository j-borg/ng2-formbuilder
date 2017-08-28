import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterializeDirective } from 'angular2-materialize';

/* Components */
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { UserComponent } from './user/user.component';
import { routing, appRoutingProviders } from './app.routing';

/* Services */
import { ServicesModule } from './services.module';

/* Pipes */
import { ObjectKeysPipe } from './pipes/objectKeys.pipe';

@NgModule({
    declarations: [
        MaterializeDirective,
        AppComponent,
        FormComponent,
        UserComponent,
        ObjectKeysPipe
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
