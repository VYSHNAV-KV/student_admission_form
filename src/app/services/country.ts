// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class CountryService {

//   private key = 'countries';

//   private countrySubject = new BehaviorSubject<any[]>(this.getCountries());
//   countries$ = this.countrySubject.asObservable();

//   getCountries() {
//     return JSON.parse(localStorage.getItem(this.key) || '[]');
//   }

//   saveCountry(country: any) {
//     let countries = this.getCountries();

//     const index = countries.findIndex(c => c.id === country.id);

//     if (index > -1) {
//       countries[index] = country; // update
//     } else {
//       country.id = Date.now();
//       countries.push(country); // add
//     }

//     localStorage.setItem(this.key, JSON.stringify(countries));
//     this.countrySubject.next(countries); // 🔥 auto refresh
//   }

//   deleteCountry(id: number) {
//     let countries = this.getCountries().filter(c => c.id !== id);
//     localStorage.setItem(this.key, JSON.stringify(countries));
//     this.countrySubject.next(countries);
//   }
// }

// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// // ✅ Optional but BEST practice (type definition)
// export interface Country {
//   id: number;
//   name: string;
//   sortOrder: number;
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class CountryService {

//   private key = 'countries';

//   // ✅ Use typed array instead of any[]
//   private countrySubject = new BehaviorSubject<Country[]>(this.getCountries());
//   countries$ = this.countrySubject.asObservable();

//   // ✅ Return type added
//   getCountries(): Country[] {
//     return JSON.parse(localStorage.getItem(this.key) || '[]');
//   }

//   saveCountry(country: Country) {
//     let countries: Country[] = this.getCountries();

//     // ✅ FIX: typed parameter
//     const index = countries.findIndex((c: Country) => c.id === country.id);

//     if (index > -1) {
//       countries[index] = country; // update
//     } else {
//       country.id = Date.now();
//       countries.push(country); // add
//     }

//     localStorage.setItem(this.key, JSON.stringify(countries));
//     this.countrySubject.next(countries); // 🔥 auto refresh
//   }

//   deleteCountry(id: number) {
//   const countries = this.getCountries();
//   const country = countries.find(c => c.id === id);

//   if (!country) return;

//   const students = this.studentService.getStudents();

//   // ✅ CHECK usage
//   const isUsed = students.some(s => s.country === country.name);

//   if (isUsed) {
//     alert('❌ Cannot delete. Country is used by students.');
//     return;
//   }

//   const updated = countries.filter(c => c.id !== id);

//   localStorage.setItem(this.key, JSON.stringify(updated));
//   this.countrySubject.next(updated);
// }
// }

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StudentService, Student } from './student';

export interface Country {
  id: number;
  name: string;
  sortOrder: number;
}

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private key = 'countries';

  private countrySubject = new BehaviorSubject<Country[]>(this.getCountries());
  countries$ = this.countrySubject.asObservable();

  constructor(private studentService: StudentService) {} // ✅ FIX

  getCountries(): Country[] {
    return JSON.parse(localStorage.getItem(this.key) || '[]');
  }

  saveCountry(country: Country) {
  let countries: Country[] = this.getCountries();
  let students = this.studentService.getStudents();

  const index = countries.findIndex(c => c.id === country.id);

  if (index > -1) {
    const oldName = countries[index].name;
    countries[index] = country;

    // 🔥 update students
    students = students.map(s => {
      if (s.country === oldName) {
        return { ...s, country: country.name };
      }
      return s;
    });

    localStorage.setItem('students', JSON.stringify(students));

  } else {
    country.id = Date.now();
    countries.push(country);
  }

  localStorage.setItem(this.key, JSON.stringify(countries));
  this.countrySubject.next(countries);
}

  deleteCountry(id: number) {
    const countries = this.getCountries();
    const country = countries.find(c => c.id === id);

    if (!country) return;

    const students = this.studentService.getStudents();

    // ✅ FIX: type added
    const isUsed = students.some((s: Student) => s.country === country.name);

    if (isUsed) {
      alert('❌ Cannot delete. Country is used by students.');
      return;
    }

    const updated = countries.filter(c => c.id !== id);

    localStorage.setItem(this.key, JSON.stringify(updated));
    this.countrySubject.next(updated);
  }
}