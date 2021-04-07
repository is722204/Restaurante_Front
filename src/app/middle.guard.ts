import { Injectable } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { PedidosService } from './services/pedidos.service';

@Injectable({
  providedIn: 'root'
})
export class MiddleGuard implements CanActivate {

  constructor(private check: PedidosService, private router: Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    let mesa = this.check.table
    let pass = this.check.password
    return this.check.getActive(mesa, pass).pipe(
      map((data: any) => {
        if (data == "true") {
          return true
        } else {
          this.router.navigate(['/login'])
          return false
        }
      })
    ); 
  }
}
