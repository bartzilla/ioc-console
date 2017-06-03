import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {User} from "../../domain/User";
import "rxjs/add/operator/map";
import { environment } from '../../../environments/environment';
import {Application} from "../../domain/Application";
import {JwtHelper} from "angular2-jwt";

@Injectable()
export class TenantService {
    private baseUrl: string = environment.baseUrl + "/v1/tenants/";
    private jwtHelper: JwtHelper = new JwtHelper();

    constructor(private http:Http){}

    public setAuthorizationToken(headers: Headers, token) {
        if(token) {
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", token);
        }
    }

    getTenantsByEmail(email: string) {
        return this.http.get(this.baseUrl + email).
        map(res => res.json());
    }

    createTenant(newUser: User) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this.http.post(this.baseUrl, JSON.stringify(newUser), {headers: headers})
            .map(res => res.json());
    }

}

