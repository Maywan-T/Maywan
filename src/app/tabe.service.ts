import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Tabe} from './tabe';



@Injectable({
  providedIn: 'root'
})


export class TabeService {
  baseUrl: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }



  getPeople(): Observable<Tabe[]>{
    console.log('getPeople'+this.baseUrl + 'people')
    return this.http.get<Tabe[]>(this.baseUrl + "people")
  }
 
  addPerson(tabe:Tabe): Observable<any>{
    const headers = {'content-type': 'application/json'}
    const body = JSON.stringify(tabe);
    console.log(body)
    return this.http.post(this.baseUrl + 'people', body, {'headers': headers})
  }

}

