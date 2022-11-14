import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductListSidebarComponent } from './product-list-sidebar/product-list-sidebar.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent,
    children: [
      {
        path: ':id',
        component: ProductDetailComponent
      }
    ]
  },
  {
    path: 'products',
    component: ProductListSidebarComponent,
    outlet: 'sidebar'
  },
  {
    path: '',
    component: SidebarComponent,
    outlet: 'sidebar'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
