import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.conponent.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private authListenerSub: Subscription;
  userAuthenticated = false;

  constructor(private authService: AuthService) {}

  OnLogout() {
    this.authService.logout();
  }

  ngOnInit() {
    this.authListenerSub = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userAuthenticated = isAuthenticated;
      });
      this.userAuthenticated = this.authService.getIsAuth();
  }

  ngOnDestroy() {
    this.authListenerSub.unsubscribe();
  }
}
