// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
// import { Router } from '@angular/router';
// import { Student, StudentService } from '../../services/student';


// @Component({
//   selector: 'app-admission-form',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule],
//   templateUrl: './admission-form.html',
// })
// export class AdmissionForm {

//   studentForm!: FormGroup;   // ✅ Declare first (no initialization here)

//   countries = ['India', 'USA', 'UK', 'Canada', 'Australia'];

//   constructor(
//     private fb: FormBuilder,
//     private studentService: StudentService,
//     private router: Router
//   ) {

//     // ✅ Initialize INSIDE constructor (fixes fb error)
//     this.studentForm = this.fb.group({
//       id: [0],
//       name: ['', Validators.required],
//       mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
//       dob: ['', Validators.required],
//       country: ['', Validators.required],
//       gender: ['', Validators.required],
//       isIndian: [false]
//     });

//     // ✅ Handle EDIT data (optional but important)
//     const nav = this.router.getCurrentNavigation();
//     const stateStudent = nav?.extras?.state?.['student'];

//     if (stateStudent) {
//       this.studentForm.patchValue(stateStudent);
//     }
//   }

//   // submit() {
//   //   if (this.studentForm.valid) {

//   //     const student: Student = {
//   //       id: this.studentForm.value.id || Date.now(),
//   //       name: this.studentForm.value.name,
//   //       mobile: this.studentForm.value.mobile,
//   //       dob: this.studentForm.value.dob,
//   //       country: this.studentForm.value.country,
//   //       gender: this.studentForm.value.gender,
//   //       isIndian: this.studentForm.value.isIndian
//   //     };

//   //     this.studentService.saveStudent(student);

//   //     alert(this.studentForm.value.id ? 'Updated ✅' : 'Saved ✅');

//   //     this.studentForm.reset();

      

//   //   } else {
//   //     this.studentForm.markAllAsTouched();
//   //   }
//   // }
// //   submit() {
// //   if (this.studentForm.valid) {

// //     const isUpdate = this.studentForm.value.id && this.studentForm.value.id !== 0;

// //     const student: Student = {
// //       id: isUpdate ? this.studentForm.value.id : Date.now(),
// //       name: this.studentForm.value.name,
// //       mobile: this.studentForm.value.mobile,
// //       dob: this.studentForm.value.dob,
// //       country: this.studentForm.value.country,
// //       gender: this.studentForm.value.gender,
// //       isIndian: this.studentForm.value.isIndian
// //     };

// //     this.studentService.saveStudent(student);

// //     if (isUpdate) {
// //       alert('Updated ✅');

// //       // ✅ Redirect ONLY for update
// //       this.router.navigate(['/list']);

// //     } else {
// //       alert('Saved ✅');

// //       // ✅ Stay on same page
// //       this.studentForm.reset();
// //     }

// //   } else {
// //     this.studentForm.markAllAsTouched();
// //   }
// // }


// getAge(dob: string): number {
//   const birthDate = new Date(dob);
//   const today = new Date();

//   let age = today.getFullYear() - birthDate.getFullYear();
//   const monthDiff = today.getMonth() - birthDate.getMonth();

//   if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//     age--;
//   }

//   return age;
// }



// submit() {
//   if (this.studentForm.valid) {

//     const age = this.getAge(this.studentForm.value.dob);

//     // ✅ Age validation
//     if (age < 5) {
//       alert('Age must be at least 5 years ❌');
//       return; // stop saving
//     }

//     const isUpdate = this.studentForm.value.id && this.studentForm.value.id !== 0;

//     const student: Student = {
//       id: isUpdate ? this.studentForm.value.id : Date.now(),
//       name: this.studentForm.value.name,
//       mobile: this.studentForm.value.mobile,
//       dob: this.studentForm.value.dob,
//       country: this.studentForm.value.country,
//       gender: this.studentForm.value.gender,
//       isIndian: this.studentForm.value.isIndian
//     };

//     this.studentService.saveStudent(student);

//     if (isUpdate) {
//       alert('Updated...');
//       this.router.navigate(['/list']);
//     } else {
//       alert('Saved...');
//       this.studentForm.reset({ id: 0 });
//     }

//   } else {
//     this.studentForm.markAllAsTouched();
//   }
// }

//   reset() {
//     this.studentForm.reset();
//   }

//   allowOnlyNumbers(event: KeyboardEvent) {
//   const charCode = event.which ? event.which : event.keyCode;

//   // Allow only numbers (0-9)
//   if (charCode < 48 || charCode > 57) {
//     event.preventDefault();
//   }
// }




  
// }








// import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
// import { Router } from '@angular/router';
// import { Student, StudentService } from '../../services/student';



// @Component({
//   selector: 'app-admission-form',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule],
//   templateUrl: './admission-form.html',
// })
// export class AdmissionForm implements AfterViewInit {

//   studentForm!: FormGroup;

//   @ViewChild('nameInput') nameInput!: ElementRef;

//   countries = ['India', 'USA', 'UK', 'Canada', 'Australia'];

//   constructor(
//     private fb: FormBuilder,
//     private studentService: StudentService,
//     private router: Router
//   ) {

//     // ✅ Initialize Form
//     this.studentForm = this.fb.group({
//       id: [0],
//       name: ['', Validators.required],
//       mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
//       dob: ['', Validators.required],
//       country: ['', Validators.required],
//       gender: ['', Validators.required],
//       isIndian: [false]
//     });

//     // ✅ Handle Edit Mode
//     const nav = this.router.getCurrentNavigation();
//     const stateStudent = nav?.extras?.state?.['student'];

//     if (stateStudent) {
//       this.studentForm.patchValue(stateStudent);
//     }
//   }

//   // ✅ Auto focus on Name field
//   ngAfterViewInit() {
//     setTimeout(() => {
//       if (this.nameInput) {
//         const input = this.nameInput.nativeElement;
//         input.focus();
//         input.setSelectionRange(input.value.length, input.value.length);
//       }
//     }, 0);
//   }

//   // ✅ Age Calculation
//   getAge(dob: string): number {
//     const birthDate = new Date(dob);
//     const today = new Date();

//     let age = today.getFullYear() - birthDate.getFullYear();
//     const monthDiff = today.getMonth() - birthDate.getMonth();

//     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//       age--;
//     }

//     return age;
//   }

//   // ✅ Submit Form
//   submit() {
//   if (this.studentForm.valid) {

//     // ✅ Trim name (remove spaces before & after)
//     const trimmedName = this.studentForm.value.name.trim();

//     const age = this.getAge(this.studentForm.value.dob);

//     if (age < 5) {
//       alert('Age must be at least 5 years ❌');
//       return;
//     }

//     const isUpdate = this.studentForm.value.id && this.studentForm.value.id !== 0;

//     const student: Student = {
//       id: isUpdate ? this.studentForm.value.id : Date.now(),
//       name: trimmedName, // ✅ USE TRIMMED VALUE
//       mobile: this.studentForm.value.mobile,
//       dob: this.studentForm.value.dob,
//       country: this.studentForm.value.country,
//       gender: this.studentForm.value.gender,
//       isIndian: this.studentForm.value.isIndian
//     };

//     this.studentService.saveStudent(student);

//     if (isUpdate) {
//       alert('Updated ✅');
//       this.router.navigate(['/list']);
//     } else {
//       alert('Saved ✅');
//       this.studentForm.reset({ id: 0 });
//     }

//   } else {
//     this.studentForm.markAllAsTouched();
//   }
// }

//   // ✅ Reset Form
//   reset() {
//     this.studentForm.reset({ id: 0 });
//   }

//   // ✅ Allow only numbers in mobile input
//   allowOnlyNumbers(event: KeyboardEvent) {
//     const charCode = event.which ? event.which : event.keyCode;

//     if (charCode < 48 || charCode > 57) {
//       event.preventDefault();
//     }
//   }
// }




import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms'; // ✅ IMPORTANT
import { Router } from '@angular/router';
import { Student, StudentService } from '../../services/student';
import { Country, CountryService } from '../../services/country';
// ✅ NEW

@Component({
  selector: 'app-admission-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule], // ✅ UPDATED
  templateUrl: './admission-form.html',
})
export class AdmissionForm implements AfterViewInit {

  studentForm!: FormGroup;

  @ViewChild('nameInput') nameInput!: ElementRef;

  // ❌ REMOVE static countries
  // countries = ['India', 'USA', 'UK', 'Canada', 'Australia'];

  // ✅ NEW: dynamic countries
  countries: any[] = [];

  // ✅ Country form model (for modal)
 country: any = {
  id: 0,
  name: '',
  sortOrder: null as number | null
};
  

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private countryService: CountryService, // ✅ NEW
    private router: Router
  ) {

    // ✅ Initialize Form
    this.studentForm = this.fb.group({
      id: [0],
      name: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      dob: ['', Validators.required],
      country: ['', Validators.required],
      gender: ['', Validators.required],
      isIndian: [false]
    });

    // ✅ AUTO REFRESH COUNTRY DROPDOWN 🔥
    this.countryService.countries$.subscribe(data => {
      this.countries = data.sort((a, b) => a.sortOrder - b.sortOrder);
    });

    // ✅ Handle Edit Mode
    const nav = this.router.getCurrentNavigation();
    const stateStudent = nav?.extras?.state?.['student'];

    if (stateStudent) {
      this.studentForm.patchValue(stateStudent);
    }
  }

  // ✅ Auto focus on Name field
  ngAfterViewInit() {
    setTimeout(() => {
      if (this.nameInput) {
        const input = this.nameInput.nativeElement;
        input.focus();
        input.setSelectionRange(input.value.length, input.value.length);
      }
    }, 0);
  }

  // ✅ Age Calculation
  getAge(dob: string): number {
    const birthDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }

  // ✅ Submit Form
  submit() {
    if (this.studentForm.valid) {

      const trimmedName = this.studentForm.value.name.trim();

      const age = this.getAge(this.studentForm.value.dob);

      if (age < 5) {
        alert('Age must be at least 5 years ❌');
        return;
      }

      const isUpdate = this.studentForm.value.id && this.studentForm.value.id !== 0;

      const student: Student = {
        id: isUpdate ? this.studentForm.value.id : Date.now(),
        name: trimmedName,
        mobile: this.studentForm.value.mobile,
        dob: this.studentForm.value.dob,
        country: this.studentForm.value.country,
        gender: this.studentForm.value.gender,
        isIndian: this.studentForm.value.isIndian
      };

      this.studentService.saveStudent(student);

      if (isUpdate) {
        alert('Updated ✅');
        this.router.navigate(['/list']);
      } else {
        alert('Saved ✅');
        this.studentForm.reset({ id: 0 });
      }

    } else {
      this.studentForm.markAllAsTouched();
    }
  }

  // ✅ Reset Form
  reset() {
    this.studentForm.reset({ id: 0 });
  }

  // ✅ Allow only numbers
  allowOnlyNumbers(event: KeyboardEvent) {
    const charCode = event.which ? event.which : event.keyCode;

    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }

  // =========================
  // 🌍 COUNTRY MASTER LOGIC
  // =========================

saveCountry() {

  // ✅ Trim values
  const name = this.country.name?.trim();
  const order = this.country.sortOrder;

  // ❌ Empty validation
  if (!name || !order) {
    alert('All fields required ❌');
    return;
  }

  // ✅ Get existing countries
  const countries = this.countryService.getCountries();

  // ❌ Duplicate Name Check (ignore same ID while editing)
  const nameExists = countries.some((c: any) =>
    c.name.toLowerCase() === name.toLowerCase() &&
    c.id !== this.country.id
  );

  if (nameExists) {
    alert('Country name already exists ❌');
    return;
  }

  // ❌ Duplicate Sort Order Check
  const orderExists = countries.some((c: any) =>
    c.sortOrder === order &&
    c.id !== this.country.id
  );

  if (orderExists) {
    alert('Sort Order already used ❌');
    return;
  }

  // ✅ Save CLEAN data
  this.countryService.saveCountry({
    ...this.country,
    name: name,
    sortOrder: order
  });

  alert('Country Saved ✅');

  // ✅ Reset form
  this.country = { id: 0, name: '', sortOrder: 0 };
}

  editCountry(c: any) {
    this.country = { ...c };
  }

deleteCountry(id: number) {
  if (confirm('Delete country?')) {
    this.countryService.deleteCountry(id); 
  }
}
resetCountry() {
  this.country = {
    id: 0,
    name: '',
    sortOrder: null
  };
}

}