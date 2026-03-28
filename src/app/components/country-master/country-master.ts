// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-country-master',
//   imports: [],
//   templateUrl: './country-master.html',
//   styleUrl: './country-master.css',
// })
// export class CountryMaster {

// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CountryService } from '../../services/country.service';
import { Country } from '../../services/country';

@Component({
  selector: 'app-country-master',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './country-master.html'
})
export class CountryMaster {

  countries: Country[] = [];

  country: Country = { id: 0, name: '', sortOrder: 0 };

  constructor(private countryService: CountryService) {
    this.countryService.countries$.subscribe(data => {
      this.countries = data;
    });
  }

  save() {
    if (!this.country.name || !this.country.sortOrder) {
      alert('All fields required');
      return;
    }

    this.country.id = this.country.id || Date.now();

    this.countryService.saveCountry(this.country);

    alert(this.country.id ? 'Updated' : 'Saved');

    this.reset();
  }

  edit(c: Country) {
    this.country = { ...c };
  }

  delete(id: number) {
    if (confirm('Delete?')) {
      this.countryService.deleteCountry(id);
    }
  }

  reset() {
    this.country = { id: 0, name: '', sortOrder: 0 };
  }
}
