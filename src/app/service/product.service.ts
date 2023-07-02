import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

 private endpoint: string = `http://localhost:8080/api/v1/product`;

  constructor(private http: HttpClient) {
  }

  saveProduct(data: any): Observable<any> {
    return this.http.post<any>(this.endpoint, data);
  }

  getAllProducts(): Observable<any> {
    return this.http.get<any>(this.endpoint);
  }

  getProductById(id: string): Observable<any> {
    return this.http.get<any>(this.endpoint + '/' + id);
  }

}
