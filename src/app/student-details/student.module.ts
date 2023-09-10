import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StudentDetailsComponent } from '../student-details/student-details.component';
import { StudentRoutes } from './student-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    
    StudentDetailsComponent
    
    
  ],
  imports: [RouterModule.forChild(StudentRoutes),
    FormsModule,CommonModule,ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [StudentDetailsComponent]
})
export class StudentModule { }
