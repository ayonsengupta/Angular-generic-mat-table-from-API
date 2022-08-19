import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AppChildService {

  constructor( private http:HttpClient) {
   }

   getData(): Promise<any>{
     return this.http.get('https://jsonplaceholder.typicode.com/todos').toPromise();
   }

}