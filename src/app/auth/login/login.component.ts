import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isAuth:boolean = false;
  constructor(private authService:AuthService) {
  }
  loginForm = new FormGroup({
    email: new FormControl('', Validators["required"]),
    password: new FormControl('', Validators["required"])
  })
  onSubmit() {
    const emailValue = this.loginForm.value.email
    const passwordValue = this.loginForm.value.email
    if(emailValue && passwordValue ) {
      this.authService.onLogin({

        email:emailValue,
        password: passwordValue
      })
    }
  }
}
