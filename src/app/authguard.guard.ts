import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from "@angular/router";
import { APiService } from "./api.service";

@Injectable({
    providedIn: 'root'
})

export class AuthguardGuard implements CanActivate {
    constructor(private dataService: APiService, private router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        const routeurl: string = state.url;
        return this.isLogin(routeurl);
    }

    isLogin(routerurl: string) {
        if (this.dataService.isLoggedIn()) {
            return true;
        }
        this.dataService.redirectUrl = routerurl;
        this.router.navigate(['/login'], { queryParams: { returnUrl: routerurl } });
    }

}