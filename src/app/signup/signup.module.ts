import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    imports: [
        CommonModule,
        SignupRoutingModule,
        NgbModule.forRoot(),
        FormsModule
    ],
    declarations: [SignupComponent]
})
export class SignupModule { }
