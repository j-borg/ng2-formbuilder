import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { MaterializeDirective } from 'angular2-materialize';
import { FormBuilderModule } from './form/form.module';

/* Components */
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { routing, appRoutingProviders } from './app.routing';

/* Services */
import { ServicesModule } from './services.module';

@NgModule({
    declarations: [
        MaterializeDirective,
        AppComponent,
        UserComponent
    ],
    imports: [
        BrowserModule,
        routing,
        HttpModule,
        FormBuilderModule,
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
