import { Component, OnInit } from '@angular/core';
import {ApplicationService} from "../../../../shared/services/application.service";
import {AuthService} from "../../../../shared/services/auth.service";
import {Router} from "@angular/router";
import {Application} from "../../../../domain/Application";

@Component({
    selector: 'create-button',
    templateUrl: './create-button.component.html',
    styleUrls: ['./create-button.component.scss']
})
export class CreateButtonComponent implements OnInit {
    constructor(private applicationService: ApplicationService, private auth: AuthService, private router: Router){}
    ngOnInit() { }

    public createApplication(event) {
        event.preventDefault();

        var newApplication = {
            applicationName: "ui-app"
        };

        this.applicationService.createApplication(newApplication).subscribe(application => {
            console.log('This is the new application', application);
        });
    }
}
