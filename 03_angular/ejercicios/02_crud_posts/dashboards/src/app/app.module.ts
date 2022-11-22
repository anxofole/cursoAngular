import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { APP_CONFIG, APP_CONFIG_TOKEN } from './app.config';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { CreateComponent } from './dashboard/posts/create/create.component';
import { EditComponent } from './dashboard/posts/edit/edit.component';
import { ListComponent } from './dashboard/posts/list/list.component';
import { LogsComponent } from './dashboard/logs/logs.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogsComponent,
    DashboardComponent,
    CreateComponent,
    EditComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: APP_CONFIG_TOKEN, useValue: APP_CONFIG },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
