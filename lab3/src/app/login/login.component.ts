import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;

  constructor(private FormBuilder: FormBuilder, private router:Router) {
    this.loginForm = this.FormBuilder.group({
      login: "",
      password:""
    })
   }

  onSubmit(loginData: Partial<{ login: string | null; password: string | null; }>) {
    if (loginData.login === "Admin" && loginData.password === "123") {
      window.localStorage.setItem("isLoginned", "true");
      this.router.navigate(['/Profile'])

    } else {
      window.alert("Login failed. Wrong credentials") 
    }
    this.loginForm.reset();
  }
  ngOnInit(): void {
  }

}
