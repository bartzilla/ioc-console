import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TenantService} from "./shared/services/tenant.service";
import {AuthService} from "./shared/services/auth.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    providers: [TenantService, AuthService],
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(public router: Router) { }
    ngOnInit() {
        // this.router.navigate(['/login']);
    }
}
