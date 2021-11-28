import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunosGuard implements CanActivateChild {
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //console.log(childRoute);
    //console.log(state);

    console.log('AlunosGard: guarda de rota filha')


    if (state.url.includes('editar')) {
      //alert('Usuario sem acesso para editar');
      //return of(false);
    }

    return true;
  }

}
