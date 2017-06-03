import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {User} from "../../domain/User";
import "rxjs/add/operator/map";
import { environment } from '../../../environments/environment';
import {Application} from "../../domain/Application";

@Injectable()
export class ApplicationService {
    private baseUrl: string = environment.baseUrl + "/v1/applications";

    constructor(private http:Http){}

    public setAuthorizationToken(headers: Headers, token) {
        if(token) {
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", token);
        }
    }

    getApplications(user: User) {

        let headers = new Headers();
        let token = localStorage.getItem("jwt-ioc");
        this.setAuthorizationToken(headers, token);


        return this.http.get(this.baseUrl, {headers: headers})
            .map(res => res.json());
    }

    createApplication(newApplication: Application) {
        let headers = new Headers();
        let token = localStorage.getItem("jwt-ioc");
        this.setAuthorizationToken(headers, token);

        return this.http.post(this.baseUrl, JSON.stringify(newApplication), {headers: headers})
            .map(res => res.json());
    }

    deleteApplication(id) {
        let headers = new Headers();
        let token = localStorage.getItem("jwt-ioc");
        this.setAuthorizationToken(headers, token);

        return this.http.delete(this.baseUrl + "/" + id, {headers: headers})
            .map(res => res.json());
    }
}


