import { Component } from '@angular/core';
import { UserDataService } from '../services/user-data.service';
import { HttpClient } from '@angular/common/http';
import { FormControl,FormGroup,Validator } from '@angular/forms';
import { Input } from '@angular/core';
@Component({
  
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})



export class StudentDetailsComponent {

  users:any;
  coursedata:any;
  teacher:any;
  constructor(private userdata: UserDataService) { 
    
   
  }
  ngOnInit(){
    this.userdata.getuser().subscribe((data)=>{
      this.users=data;
    });
    this.userdata.getcourse().subscribe((data)=>{
      
      this.coursedata=data;})

      this.userdata.getteacher().subscribe((data)=>{
        this.teacher=data;
      })

  }
  

  title:string='';
  studentName:string='';
  courseCode:string='';
  teacherid:string='';

  currentid:number=0;
 
  
  addstudentdetails(){
    let adduser={
      "Title":this.title,
      "Studentname":this.studentName,
      "Coursecode":this.courseCode,
      "Teacherid":this.teacherid
    
    }
   
   
    this.userdata.postuser(adduser).subscribe((res)=>{
    alert("new student added");}
    );

  }
  ondeleteUser(id:number){
    this.userdata.ondelete(id).subscribe(()=>{
      this.users;
    });
  
  
  }
  getdropdownvalues(){

  }

  editdata(student:any){
   this.title=student.title;
   this.studentName=student.studentName;
   this.courseCode=student.courseCode;
   this.teacherid=student.teacherId;
   this.currentid=student.studentId;

  }
  
  
  
  updatestudent(){
    const updateuser={
      id:this.currentid,
      title:this.title,
      studentName:this.studentName,
      CourseCode:this.courseCode,
      TeacherId:this.teacherid
    
    }
    this.userdata.update(this.currentid,updateuser).subscribe((data)=>
    {
      
      alert("data is successfully update");
    })
  }


  
}

  

