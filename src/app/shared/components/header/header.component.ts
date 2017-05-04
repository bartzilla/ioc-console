import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {JwtHelper} from "angular2-jwt";
import {User} from "../../../domain/User";

@Component({
    moduleId: module.id,
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public user: User;
    private jwtHelper: JwtHelper = new JwtHelper();

    constructor(private auth: AuthService) {
        this.user = this.jwtHelper.decodeToken(localStorage.getItem("jwt-ioc"));
    }
    ngOnInit() {}

    public logout() {
        this.auth.logout().subscribe();
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('push-right');
    }
    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }
}
