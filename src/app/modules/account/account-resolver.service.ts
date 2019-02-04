import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {UserService} from '../../core/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AccountDataResolver implements Resolve <any> {

  constructor(private userService: UserService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.userService.getCurrentUser();
  }
}
