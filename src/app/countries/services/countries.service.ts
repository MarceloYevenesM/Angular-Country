import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountriesService {

  private apiUrl: string = 'https://api.apilayer.com/geo/country';
  private apiKey: string = '38gLG1W5HBHoxavaPQfGpMb7XVnO0n2T'

  constructor(private http: HttpClient) { }


  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    const params = new HttpParams()
      .set('apikey', this.apiKey);
    return this.http.get<Country[]>(`${this.apiUrl}/code/${code}`, { params })
      .pipe(
        /* se usa map por la api regresa un arreglo siempre */
        map(countries => countries.length > 0 ? countries[0] : null),
        /* Detectar o capturar el error y el of me permite construir otro observable */
        catchError(error => of(null)) //Capturo y devuelvo un nuevo observable que es un arreglo vacio
      );
  }


  searchByCapital(term: string): Observable<Country[]> {
    const params = new HttpParams()
      .set('apikey', this.apiKey);
    return this.http.get<Country[]>(`${this.apiUrl}/capital/${term}`, { params })
      .pipe(
        /* Detectar o capturar el error y el of me permite construir otro observable */
        catchError(error => of([])) //Capturo y devuelvo un nuevo observable que es un arreglo vacio
      );
  }

  searchCountry(term: string) {
    const params = new HttpParams()
      .set('apikey', this.apiKey);
    return this.http.get<Country[]>(`${this.apiUrl}/name/${term}`, { params })
      .pipe(
        /* Detectar o capturar el error y el of me permite construir otro observable */
        catchError(error => of([])) //Capturo y devuelvo un nuevo observable que es un arreglo vacio
      );
  }

  searchRegion(region: string) {
    const params = new HttpParams()
      .set('apikey', this.apiKey);
    return this.http.get<Country[]>(`${this.apiUrl}/region/${region}`, { params })
      .pipe(
        /* Detectar o capturar el error y el of me permite construir otro observable */
        catchError(error => of([])) //Capturo y devuelvo un nuevo observable que es un arreglo vacio
      );
  }



}
