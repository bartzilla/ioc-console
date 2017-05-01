import { Component, OnInit } from '@angular/core';
import {TenantService} from "../shared/services/tenant.service";
import {AuthService} from "../shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    private alerts: Array<any> = [];
    private dashboard: string = "/dashboard";
    private tenantName: string;
    private email: string;
    private password: string;

    constructor(private tenantService: TenantService, private auth: AuthService, private router: Router){}

    public register(event) {
        event.preventDefault();
        var newUser = {
            tenantName: this.tenantName,
            email: this.email,
            password: this.password,
        };

        this.tenantService.createTenant(newUser).subscribe(tenant => {
            console.log('This is the newUser', tenant);

            this.auth.login(this.email, this.password).subscribe((res => {

                if(res.token && res.token.length >=0) {
                    localStorage.setItem("jwt-ioc", res.token);
                }

                this.router.navigate([this.dashboard]);
            }),(err) => {

                let message = JSON.parse(err._body).message;

                if(message && message.length >=0 ){
                    this.alerts.push({id: 1, type: 'danger', message: message });
                } else {
                    this.alerts.push({id: 1, type: 'danger', message: err });
                }
            });
        });

    }

    ngOnInit() { }
}
