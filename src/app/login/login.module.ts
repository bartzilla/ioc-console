import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        NgbModule.forRoot(),
        FormsModule
    ],
    declarations: [LoginComponent]
})
export class LoginModule { }
