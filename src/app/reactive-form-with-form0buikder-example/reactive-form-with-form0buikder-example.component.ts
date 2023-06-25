import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-with-form0buikder-example',
  templateUrl: './reactive-form-with-form0buikder-example.component.html',
  styleUrls: ['./reactive-form-with-form0buikder-example.component.css']
})
export class ReactiveFormWithForm0buikderExampleComponent {
  userForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {

    this.userForm = this.formBuilder.group  ({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern("^((\\+[0-9]{2}-?)|0)?[0-9]{10}$")]],
      saveDetails: [true]
    });
  }

  onSubmit() {
    console.log('Valid?', this.userForm.valid); // true or false
    console.log('Name', this.userForm.value.name);
    console.log('Email', this.userForm.value.email);
    console.log('Message', this.userForm.value.phoneNumber);
  }
}
