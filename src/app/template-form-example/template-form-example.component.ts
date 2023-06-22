import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form-example',
  templateUrl: './template-form-example.component.html',
  styleUrls: ['./template-form-example.component.css']
})
export class TemplateFormExampleComponent {

  user: User;

  constructor() {
    this.user = {} as User;
  }

  public validate(form: NgForm): void {
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }

    alert("validation success and user data is:" + this.user.name + "," + this.user.password + "," + this.user.email)

  }
}


interface User {
  name: string;
  email: string;
  password: string;
  showPassword: boolean;
}
