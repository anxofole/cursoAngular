import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogsComponent } from './dashboard/logs/logs.component';
import { ConfirmExitGuard } from './dashboard/posts/comfirm-exit.guard';
import { CreateComponent } from './dashboard/posts/create/create.component';
import { EditComponent } from './dashboard/posts/edit/edit.component';
import { ListComponent } from './dashboard/posts/list/list.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'posts',
        pathMatch: 'full',
      },
      {
        path: 'logs',
        component: LogsComponent,
      },
      {
        path: 'posts',
        children: [
          {
            path: '',
            component: ListComponent,
          },
          {
            path: 'create',
            component: CreateComponent,
            canDeactivate: [ConfirmExitGuard],
          },
          {
            path: 'edit/:id',
            component: EditComponent,
            canDeactivate: [ConfirmExitGuard],
          },
        ],
      },
    ],
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
