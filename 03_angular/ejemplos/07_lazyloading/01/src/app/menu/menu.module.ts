import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';

export const MENU_ROUTES = [
  { path: '', component: MenuComponent }
];

@NgModule({
  imports: [RouterModule],
  declarations: [MenuComponent]
})
export class MenuModule { }
