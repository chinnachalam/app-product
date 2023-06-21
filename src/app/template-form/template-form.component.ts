import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  submitForm(userForm: NgForm) {
    alert('form submitted' + userForm.value.username + userForm.value.password + userForm.value.phonenumber)
  }
}
