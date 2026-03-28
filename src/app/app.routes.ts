// import { Routes } from '@angular/router';

// export const routes: Routes = [];

import { Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdmissionForm } from './components/admission-form/admission-form';
import { StudentList } from './components/student-list/student-list';


export const routes: Routes = [
  { path: '', redirectTo: 'form', pathMatch: 'full' },
  { path: 'form', component: AdmissionForm },
  { path: 'list', component: StudentList },
  { path: '**', redirectTo: 'form' }
];
