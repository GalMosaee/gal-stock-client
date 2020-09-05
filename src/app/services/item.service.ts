import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private baseUrl = 'http://localhost:8080/stock/items';

  constructor(private http: HttpClient) { }

  getItem(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createItem(item: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, item);
  }

  updateItem(id: number, amount: number): Observable<Object> {
    if(amount<0){
      return this.http.put(`${this.baseUrl}/withdrawal/${id}/${-amount}`, null);
    }
    return this.http.put(`${this.baseUrl}/deposit/${id}/${amount}`, null);
  }

  deleteItem(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getItemsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}