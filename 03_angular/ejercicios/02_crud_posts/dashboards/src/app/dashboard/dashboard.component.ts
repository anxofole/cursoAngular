import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  public currentUser!: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser
      .subscribe(user => this.currentUser = user);
  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
