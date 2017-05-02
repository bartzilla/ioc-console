import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {User} from "../../domain/User";
import "rxjs/add/operator/map";
import { environment } from '../../../environments/environment';

@Injectable()
export class TenantService {
    private baseUrl: string = environment.baseUrl + "/v1/tenants/";

    constructor(private http:Http){}

    getTenantsByEmail(email: string) {
        return this.http.get(this.baseUrl + email).
        map(res => res.json());
    }

    createTenant(newUser: User) {
        var headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this.http.post(this.baseUrl, JSON.stringify(newUser), {headers: headers})
            .map(res => res.json());
    }

}

