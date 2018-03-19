import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { AppUser } from '../../models/app-user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  appUser: AppUser;

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.authService.appUser$.subscribe(appUser => this.appUser = appUser);
  }

  logout() {
    this.authService.logout();
  }

}
