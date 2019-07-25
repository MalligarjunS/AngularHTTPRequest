import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStudent } from './student';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private _url: string ="/assets/data/student.json";
  getstudents():Observable<IStudent[]>{ 
   return this.http.get<IStudent[]>(this._url);
  
}
  constructor(private http: HttpClient) { }
}
