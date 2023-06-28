import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-routing-login',
  templateUrl: './routing-login.component.html',
  styleUrls: ['./routing-login.component.css']
})
export class RoutingLoginComponent {
  userForm: FormGroup = new FormGroup({});

  constructor(private router:Router){}

  ngOnInit() {
    this.userForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [ Validators.required]),
    });
  }

  onSubmit() {

    localStorage.setItem('userForm', JSON.stringify(this.userForm.value));
    localStorage.setItem("isLoggedIn", "true");
    //sessionStorage.setItem("isLoggedIn", "true");
    this.router.navigate(['/home']);
  }
}
