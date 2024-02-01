import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {AuthService} from "../../auth/service/auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit, OnDestroy {
  @Output() closeNav = new EventEmitter<void>();
  authSubscription: Subscription | undefined
  authCheck: boolean = false

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(auth => {
      this.authCheck = auth
    })
  }

  constructor(private authService: AuthService) {
  }

  onCloseNav() {
    this.closeNav.emit()
  }

  logout() {
    this.authService.logout();
    this.onCloseNav()
  }

  ngOnDestroy() {
    this.authSubscription?.unsubscribe()
  }
}
