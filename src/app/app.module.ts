import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDataService } from './services/user-data.service';
import { StudentsGradeComponent } from './students-grade/students-grade.component';
import { TeacherdetailsComponent } from './teacherdetails/teacherdetails.component';
import { HomeComponent } from './home/home.component';
import { Routes,RouterModule } from '@angular/router';
import { MainRoutes } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(MainRoutes)
    ,HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
