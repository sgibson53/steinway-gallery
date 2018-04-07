import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public notificationOptions = {
    position: ['bottom', 'right'],
    timeOut: 5000,
    lastOnBottom: true,
    showProgressBar: false
  };

  constructor(private auth: AuthService, private router: Router, private userService: UserService) {
    auth.user$.subscribe(user => {
      const returnUrl = localStorage.getItem('returnUrl');
      if (user && returnUrl) {
        localStorage.removeItem('returnUrl');
        userService.save(user);
        router.navigateByUrl(returnUrl);
      }
    });
  }
}
