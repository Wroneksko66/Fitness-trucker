import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "./service/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthAGuard implements CanActivate {
  constructor(private  authService:AuthService, private router:Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.authService.isAuth()? true : this.router.navigate(['/login'])
  }

}
