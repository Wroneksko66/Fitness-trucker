import {User} from "../interface/user.interface";
import {AuthData} from "../interface/auth-data.interface";
import {Subject} from "rxjs";
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable({providedIn:"root"})
export class AuthService {
  private user: User | undefined
  authChange: Subject<boolean> = new Subject<boolean>()

  constructor(private router: Router) {
  }

  register(userData: AuthData) {
    this.user = {
      email: userData.email,
      userId: Math.round(Math.random() * 1000).toString()
    }
    this.authSuccessful()
  }

  onLogin(userData: AuthData) {
    this.user = {
      email: userData.email,
      userId: Math.round(Math.random() * 1000).toString()
    }
    this.authSuccessful()
  }

  logout() {
    this.user = undefined
    this.authChange.next(false)
    this.router.navigate(['login'])
  }

  getUser() {
    return {...this.user}
  }

  isAuth() {
    return this.user != undefined
  }

  authSuccessful() {
    this.authChange.next(true)
    this.router.navigate(['training'])
  }
}
