import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {User} from "../../domain/User";
import "rxjs/add/operator/map";

@Injectable()
export class TenantService {
    private baseUrl: string = "http://localhost:3000/v1/tenants/";

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

