// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-student-list',
//   imports: [],
//   templateUrl: './student-list.html',
//   styleUrl: './student-list.css',
// })
// export class StudentList {

// }
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Router } from '@angular/router';
import { Student, StudentService } from '../../services/student';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './student-list.html',
  styleUrl:'./student-list.css'
})
export class StudentList {
  students: Student[] = [];

  constructor(private studentService: StudentService, private router: Router) {
    this.loadStudents();
  }

  loadStudents() {
    this.students = this.studentService.getStudents();
  }

  edit(student: Student) {
    this.router.navigate(['/form'], { state: { student } });
  }


  delete(id: number) {
  if (confirm('Are you sure you want to delete?')) {
    setTimeout(() => {
      this.studentService.deleteStudent(id);
      this.loadStudents();
      alert('Deleted ✅');
    }, 200); // small delay for smooth feel
  }
}






searchText: string = ''; // ✅ NEW



// ✅ NEW FILTER
get filteredStudents() {
  return this.students.filter(s =>
    s.name.toLowerCase().includes(this.searchText.toLowerCase())
  );
}

}