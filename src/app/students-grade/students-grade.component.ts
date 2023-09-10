import { Component } from '@angular/core';
import { UserDataService } from '../services/user-data.service';
@Component({
 
  templateUrl: './students-grade.component.html',
  styleUrls: ['./students-grade.component.css']
})
export class StudentsGradeComponent {
  courses:any;
  constructor(private course: UserDataService) { 
    this.course.getcourse().subscribe((data)=>{
      this.courses=data;
    })
    
  }
 

  CourseCode:string='';
  courseTitle:string='';
  unit:number=0;
  Grade:number=0.00;

  currentid:string='';

  
  adddetails(){
    let adduser={
      "CourseCode":this.CourseCode,
      "CourseTitle":this.courseTitle,
      "Unit":this.unit,
      "Grade":this.Grade
    
    }
   
   
    this.course.postcourse(adduser).subscribe((res)=>{
    alert("new course added");}
    );

  }
  ondelete(id:string){
    this.course.ondeletecourse(id).subscribe(()=>{
      this.courses;
    });
  
  
  }
  
  editdata(coursedet:any){
   this.CourseCode=coursedet.courseCode;
   this.courseTitle=coursedet.courseTitle;
   this.unit=coursedet.unit;
   this.Grade=coursedet.grade;
   

  }
  updatecourse(){
    let updatecourse={

      "CourseCode":this.CourseCode,
      "CourseTitle":this.courseTitle,
      "Unit":this.unit,
      "Grade":this.Grade
    
    }
    this.course.updatecourse(this.CourseCode,updatecourse).subscribe((data)=>
    {
      alert("data is successfully update");
    })
  }


  

}
