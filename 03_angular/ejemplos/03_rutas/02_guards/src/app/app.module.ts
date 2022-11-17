import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginService } from './login.service';
import { HomeGuard } from './home.guard';

const routes: Route[] = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [HomeGuard],
  },
];

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { enableTracing: true }),
  ],
  providers: [LoginService],
  bootstrap: [AppComponent],
})
export class AppModule {}
