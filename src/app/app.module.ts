import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthGuard} from "./auth.guard";
import {AuthService} from "./shared/services/auth.service";
import {ApplicationService} from "./shared/services/application.service";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgbModule.forRoot(),
        AppRoutingModule
    ],
    providers: [AuthGuard, AuthService, ApplicationService],
    bootstrap: [AppComponent]
})
export class AppModule { }
