import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TeacherRoutes } from './teacher-routing.module';
import { TeacherdetailsComponent } from './teacherdetails.component';

import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    
    TeacherdetailsComponent
    
    
  ],
  imports: [RouterModule.forChild(TeacherRoutes),
    FormsModule,CommonModule,ReactiveFormsModule
]
    
  ,
  providers: [],
  bootstrap: [TeacherdetailsComponent]
})
export class TeacherModule { }
