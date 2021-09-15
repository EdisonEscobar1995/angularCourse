import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "./login.services";

@Injectable()
export class LoginGuardian implements CanActivate {

  constructor(
    private loginService: LoginService,
    private roter: Router,
  ){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.loginService.isAutenticado()) {
      return true;
    } else {
      this.roter.navigate(['login']);
      return false;
    }
  }
}
