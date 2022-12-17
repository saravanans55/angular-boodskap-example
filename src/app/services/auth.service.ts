import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class AuthService implements CanActivate {

    constructor(protected router: Router) {}

     canActivate() {
        console.log("Check auth---------->",localStorage.getItem('access_token'));
        if (localStorage.getItem('access_token')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    }
}