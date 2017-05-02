import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import {Observable} from "rxjs";
import "rxjs/add/operator/map";
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {
    private baseUrl: string = environment.baseUrl + "/console";

    isLoggedIn: boolean = false;
    redirectUrl: string;

    constructor (private http: Http, private router: Router) {}

    public login(email, password) {
        var headers = new Headers();
        headers.append("Content-Type", "application/json");

        const body = {
            email,
            password
        };

        return this.http.post(this.baseUrl + "/authenticate", JSON.stringify(body), {headers: headers}).map((res: Response) => {
            this.isLoggedIn = true;
            return res.json();
        });
    }

    public setAuthorizationToken(headers: Headers, token) {
        if(token) {
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", token);
        }
    }

    public authenticate(): Observable<boolean>{
        if(this.tokenNotExpired()) {

            let headers = new Headers();
            var token = localStorage.getItem("jwt-ioc");
            this.setAuthorizationToken(headers, token);
            return this.http.get(this.baseUrl + this.redirectUrl, {headers: headers}).map((res: Response) => {
                return res.json();
            });
        }
        return Observable.of(false);
    }

    private tokenNotExpired(): boolean {

        var token = localStorage.getItem("jwt-ioc");

        if(token !== null){
            return true;
        }

        return false;
    }

    public logout(): Observable<any> {

        return this.http.get(this.baseUrl + "/logout").map((res: Response) => {

            this.isLoggedIn = false;
            localStorage.removeItem("jwt-ioc");
            this.router.navigate(["/login"]);
        });
    }
}
