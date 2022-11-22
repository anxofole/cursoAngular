import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmExitGuard implements CanDeactivate<CreateComponent | EditComponent> {

  public canDeactivate(
    component: CreateComponent | EditComponent): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (component.postForm.pristine || component.saved) {
      return true;
    }

    return confirm('Are you sure?');
  }
}
