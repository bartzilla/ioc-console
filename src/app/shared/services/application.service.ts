import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {User} from "../../domain/User";
import "rxjs/add/operator/map";
import { environment } from '../../../environments/environment';
import {Application} from "../../domain/Application";
import {JwtHelper} from "angular2-jwt";

@Injectable()
export class ApplicationService {
    private baseUrl: string = environment.baseUrl + "/v1/tenants/";
    private jwtHelper: JwtHelper = new JwtHelper();

    constructor(private http:Http){}

    public setAuthorizationToken(headers: Headers, token) {
        if(token) {
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", token);
        }
    }

    getApplications(user: User) {

        let headers = new Headers();
        var token = localStorage.getItem("jwt-ioc");
        this.setAuthorizationToken(headers, token);


        return this.http.get(this.baseUrl + user.tenantId + "/applications", {headers: headers})
            .map(res => res.json());
    }

    deleteApplication(id) {
        // var headers = new Headers();
        var token = localStorage.getItem("jwt-ioc");
        // this.setAuthorizationToken(headers, token);

        let user = this.jwtHelper.decodeToken(token);
        return this.http.delete(this.baseUrl + "applications/" + id)
            .map(res => res.json());
    }

    createApplication(newApplication: Application) {
        var headers = new Headers();
        var token = localStorage.getItem("jwt-ioc");
        this.setAuthorizationToken(headers, token);

        let user = this.jwtHelper.decodeToken(token);
        return this.http.post(this.baseUrl + user.tenantId + "/applications", JSON.stringify(newApplication), {headers: headers})
            .map(res => res.json());
    }

}


