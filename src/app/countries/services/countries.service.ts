import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://api.apilayer.com/geo/country';
  private apiKey:string = '38gLG1W5HBHoxavaPQfGpMb7XVnO0n2T'

  constructor(private http: HttpClient) { }


  searchByCapital( term: string): Observable<Country[]>{
    const params = new HttpParams()
      .set('apikey', this.apiKey);
    return this.http.get<Country[]>(`${this.apiUrl}/capital/${term}`, {params});
  }

}
