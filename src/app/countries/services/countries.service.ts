import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store.interfaces';

@Injectable({ providedIn: 'root' })
export class CountriesService {

  private apiUrl: string = 'https://api.apilayer.com/geo/country';
  private apiKey: string = '38gLG1W5HBHoxavaPQfGpMb7XVnO0n2T'

  constructor(private http: HttpClient) { }

  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountries: { term: '', countries: [] },
    byRegion: { region: '', countries: [] },
  }

  private getCountriesRequest(url: string, params: HttpParams): Observable<Country[]> {
    return this.http.get<Country[]>(url, { params })
      .pipe(
        /* Detectar o capturar el error y el of me permite construir otro observable */
        catchError(error => of([])), //Capturo y devuelvo un nuevo observable que es un arreglo vacio
        delay(1000), //Delay de 1 segundo
      );
  }

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
    const url = `${this.apiUrl}/capital/${term}`;
    return this.getCountriesRequest(url, params)
      .pipe( /* Disparar operadores de jsx  */
        /* Efecto secundario */
        tap(countries => this.cacheStore.byCapital = { term, countries })
      )
  }


  searchCountry(term: string) {
    const params = new HttpParams()
      .set('apikey', this.apiKey);
    const url = `${this.apiUrl}/name/${term}`;
    return this.getCountriesRequest(url, params);
  }


  searchRegion(region: string) {
    const params = new HttpParams()
      .set('apikey', this.apiKey);
    const url = `${this.apiUrl}/region/${region}`;
    return this.getCountriesRequest(url, params);
  }



}
