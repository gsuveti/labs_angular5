import {Inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AUTH_SERVICE, IAuthService} from './auth/auth.service';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomerGuard implements CanActivate {
  constructor(@Inject(AUTH_SERVICE) private authService: IAuthService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.getAuthorization().map(auth => {
        if (auth.customerFeatureEnabled) {
          return true;
        }

        this.router.navigate(['/']);
        return false;
      });
  }
}
