import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css'],
})
export class CreateStudentComponent {
  studentForm: FormGroup = new FormGroup({});

  constructor(private studentService: StudentService, private router: Router) {

  }

  ngOnInit() {
    this.studentForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
    });
  }

  createStudent() {
    this.studentService.createStudent(this.studentForm.value).subscribe(
      (data) => {
        this.router.navigateByUrl("/view-students")
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
