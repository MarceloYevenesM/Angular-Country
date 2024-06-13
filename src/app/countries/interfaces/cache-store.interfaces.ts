import { Country } from "./country";
import { Region } from "./region.type";

export interface CacheStore{
  byCapital: TermCountries,
  byCountries: TermCountries,
  byRegion: RegionCountries,
}


//No se suele definir una interfaz dentro de otra en dos niveles
export interface TermCountries{
  term: string,
  countries: Country[];
}

export interface RegionCountries{
  region?: Region,
  countries: Country[];
}

