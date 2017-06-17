import { Injectable }       from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
}                           from '@angular/router';
import {AuthService} from "./shared/services/auth.service";
import {Observable} from "rxjs";
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        let url: string = state.url;

        return this.checkLogin(url);
    }

    checkLogin(url: string): Observable<boolean> {

        this.authService.redirectUrl = url;
        
        return this.authService.authenticate().map(user => {
                if(user)
                    return true;

                this.router.navigate(['login']);
                return false;
            }).catch((error: any) => {
                this.router.navigate(['login']);
                return Observable.of(false);
        });
    }
}
