import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StudentsGradeComponent } from './students-grade.component';
import { CourseRoutes } from './course-details.module';

import { RouterModule, Routes } from '@angular/router';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    
    StudentsGradeComponent
    
    
  ],
  imports: [RouterModule.forChild(CourseRoutes),
    FormsModule,CommonModule,ReactiveFormsModule
]
    
  ,
  providers: [],
  bootstrap: [StudentsGradeComponent]
})
export class CourseModule { }
