import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const MainRoutes = [
  {
    path:'Home' , component:HomeComponent
},
  
  {
    path:'Student',loadChildren:()=>import('./student-details/student.module').then(m=>m.StudentModule)
  },
  {
    path:'Course',loadChildren:()=>import('./students-grade/course.module').then(m=>m.CourseModule)
  },{
    path:'Teacher',loadChildren:()=>import('./teacherdetails/teacher.module').then(m=>m.TeacherModule)
  },{
    path:'',component:HomeComponent
  }


]

