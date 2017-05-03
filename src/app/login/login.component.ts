import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/services/auth.service";
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public alerts: Array<any> = [];
    public email: string;
    public password: string;
    public dashboard: string = "/dashboard";

    constructor(private auth: AuthService, private router: Router) {}

    public login() {
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
    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

    ngOnInit() {}
}
