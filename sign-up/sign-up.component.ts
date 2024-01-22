import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  maxDate: Date | undefined;
  agree: boolean = false
  isAuth:boolean = false
constructor(private authService:AuthService) {
}
  ngOnInit(): void {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18)
    console.log(this.agree)
  }

  onSubmit(form: NgForm) {
    this.authService.register({
      email:form.value.email,
      password:form.value.password
    })
  }
}
