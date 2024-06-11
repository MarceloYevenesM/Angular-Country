import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  /* Inyectar el servicio */
  constructor(private countriesService: CountriesService) {

  }

  searchByCapital(term: string): void {

    /* Si no me suscribo nunca se emite */
    this.countriesService.searchByCapital(term).subscribe(
      countries => {
        this.countries = countries;
      }
    );


  }

}
