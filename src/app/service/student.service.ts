import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private endpoint: string = `/api/v1/student`;

  constructor(private http: HttpClient) {
  }

  createStudent(data: any): Observable<any> {
    return this.http.post<any>(this.endpoint, data);
  }

  getAllStudents(): Observable<any> {
    return this.http.get<any>(this.endpoint);
  }
}
