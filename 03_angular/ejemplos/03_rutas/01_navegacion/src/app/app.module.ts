import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { AllProfilesComponent } from './profile/all-profiles.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewProfileComponent } from './profile/new-profile.component';
import { EditProfileComponent } from './profile/edit-profile.component';

const routes: Route[] = [
  {
    path: 'profiles',
    component: AllProfilesComponent,
    children: [
      {
        path: 'new',
        component: NewProfileComponent,
      },
      {
        path: ':id',
        component: EditProfileComponent,
      },
    ],
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: '',
    redirectTo: 'profiles',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent,
    NewProfileComponent,
    EditProfileComponent,
    AllProfilesComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
