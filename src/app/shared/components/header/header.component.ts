import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
    moduleId: module.id,
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    constructor(private auth: AuthService) { }
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
