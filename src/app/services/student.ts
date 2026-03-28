// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class Student {
  
// }

import { Injectable } from '@angular/core';

export interface Student {
  id: number;
  name: string;
  mobile: string;
  dob: string;
  country: string;
  gender: string;
  isIndian: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private storageKey = 'students';

  getStudents(): Student[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  saveStudent(student: Student) {
    const students = this.getStudents();
    const index = students.findIndex(s => s.id === student.id);
    if (index > -1) {
      students[index] = student; // Update
    } else {
      students.push(student); // Add
    }
    localStorage.setItem(this.storageKey, JSON.stringify(students));
  }

  deleteStudent(id: number) {
    let students = this.getStudents();
    students = students.filter(s => s.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(students));
  }
}
