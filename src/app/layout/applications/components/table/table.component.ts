import { Component, OnInit } from '@angular/core';
import {ApplicationService} from "../../../../shared/services/application.service";
import {JwtHelper} from "angular2-jwt";
import {User} from "../../../../domain/User";
import {Application} from "../../../../domain/Application";

@Component({
    selector: 'apps-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

    public user: User;
    public applications: Array<Application> = [];
    private jwtHelper: JwtHelper = new JwtHelper();

    constructor(private applicationService: ApplicationService) {}

    ngOnInit() {
        this.user = this.jwtHelper.decodeToken(localStorage.getItem("jwt-ioc"));

        this.applicationService.getApplications(this.user).subscribe(applications => {
            console.log(applications);
            this.applications = applications;
        });
    }
}
