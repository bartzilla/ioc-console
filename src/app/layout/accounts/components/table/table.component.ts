import { Component, OnInit } from '@angular/core';
import {ApplicationService} from "../../../../shared/services/application.service";
import {JwtHelper} from "angular2-jwt";
import {Application} from "../../../../domain/Application";
import {AccountService} from "../../../../shared/services/account.service";

@Component({
    selector: 'accounts-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

    public app: Application;
    public accounts: Array<Account> = [];
    private jwtHelper: JwtHelper = new JwtHelper();

    constructor(private accountService: AccountService) {}

    ngOnInit() {
        this.app = this.jwtHelper.decodeToken(localStorage.getItem("jwt-ioc"));

        this.accountService.getAccounts(this.app).subscribe(accounts => {
            this.accounts = accounts;
        });
    }

    // public deleteApplication(id: string): void {
    //     let apps = this.applications;
    //     this.applicationService.deleteApplication(id).subscribe(data => {
    //         console.log(data);
    //
    //         for(var i=0; i < apps.length; i++) {
    //             if(apps[i]._id === id) {
    //                 apps.splice(i, 1);
    //             }
    //         }
    //     });
    // }

}
