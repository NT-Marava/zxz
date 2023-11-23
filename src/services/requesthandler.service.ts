import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequesthandlerService {

  constructor(private http: HttpClient) { }




  getArticles(): Observable<any> {
    return this.http.get('../assets/data/articles.json');
  }


  getArticle(): Observable<any> {
    return this.http.get('../../assets/data/products.json');
  }

  getServices(): Observable<any> {
    return this.http.get('../../assets/data/classes.json');
  }

  getTestimonials(): Observable<any> {
    return this.http.get('../../assets/data/testimonials.json');
  }
}
