import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {AuthService} from "../../auth/service/auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() toggleNav = new EventEmitter<void>()
  isAuth: boolean = false
  authSubscription: Subscription | undefined;

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(auth => {
      this.isAuth = auth
    })
  }

  constructor(private authService: AuthService) {

  }

  onToggleSideNav() {
    this.toggleNav.emit()
  }

  ngOnDestroy() {
    this.authSubscription?.unsubscribe()

  }

  logout() {
    this.authService.logout()
  }
}
