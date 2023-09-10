import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http:HttpClient) {
    
    
   
   }

  getuser(){
  return this.http.get('https://localhost:7093/api/StudentDetailsNoCombineds');
  }
  
  postuser(data:any){
    return this.http.post('https://localhost:7093/api/StudentDetailsNoCombineds',data);

  }
  ondelete(id:number){
    return this.http.delete(`https://localhost:7093/api/StudentDetailsNoCombineds/${id}`);

  }
  update(id:number,student:any){
    return this.http.put(`https://localhost:7093/api/StudentDetailsNoCombineds/${id}`,student);

  }
  getcourse(){
    return this.http.get('https://localhost:7093/api/StudentGradeNoCombineds');
    }
    
    postcourse(data:any){
      return this.http.post('https://localhost:7093/api/StudentGradeNoCombineds',data);
  
    }
    ondeletecourse(id:string){
      return this.http.delete(`https://localhost:7093/api/StudentGradeNoCombineds/${id}`);
  
    }
    updatecourse(id:string,course:any){
      return this.http.put('https://localhost:7093/api/StudentGradeNoCombineds/${id}',course);
  
    }
    getteacher(){
      return this.http.get('https://localhost:7093/api/TeacherNoCombineds');
    }
  }
