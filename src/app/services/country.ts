// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class Country {
  
// }

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private storageKey = 'countries';

  // ✅ Real-time update
  private countryList = new BehaviorSubject<Country[]>(this.getCountries());
  countries$ = this.countryList.asObservable();

  getCountries(): Country[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  saveCountry(country: Country) {
    let countries = this.getCountries();

    const index = countries.findIndex(c => c.id === country.id);

    if (index > -1) {
      countries[index] = country; // update
    } else {
      countries.push(country); // add
    }

    localStorage.setItem(this.storageKey, JSON.stringify(countries));

    this.countryList.next(countries); // 🔥 auto refresh
  }

  deleteCountry(id: number) {
    let countries = this.getCountries().filter(c => c.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(countries));
    this.countryList.next(countries);
  }
}


