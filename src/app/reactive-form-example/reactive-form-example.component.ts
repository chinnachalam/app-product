import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-example',
  templateUrl: './reactive-form-example.component.html',
  styleUrls: ['./reactive-form-example.component.css']
})
export class ReactiveFormExampleComponent implements OnInit{
  userForm: FormGroup = new FormGroup({});

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]),
      email: new FormControl('', [Validators.email, Validators.required]),
      phoneNumber: new FormControl('+91', [Validators.required, Validators.pattern("^((\\+[0-9]{2}-?)|0)?[0-9]{10}$")]),
      saveDetails: new FormControl(true)
    });
  }

  onSubmit() {
    console.log('Valid?', this.userForm.valid); // true or false
    console.log('Name', this.userForm.value.name);
    console.log('Email', this.userForm.value.email);
    console.log('Message', this.userForm.value.phoneNumber);
  }
}
