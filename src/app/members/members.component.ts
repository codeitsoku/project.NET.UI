import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit 
{

  constructor(private http:HttpClient) { }
  sportsdepartments:any=[];
  members:any=[];

  modalTitle ="";
  MemberId = 0;
  MemberName = "";
  Designation = "";
  Department = "";
  DateofJoining = "";
  PhotoFileName = "anonymous.png";
  PhotoPath=environment.PHOTO_URL;

  // DepartmentIdFilter="";
  // DepartmentNameFilter="";
  // departmentsWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(){
    this.http.get<any>(environment.API_URL+'members')
    .subscribe(data=>{
      this.members=data;
    });
  }

  addClick(){
    this.modalTitle="Add Member";
    this.MemberId=0;
    this.MemberName="";
    this.Designation = "";
    this.Department="";
    this.DateofJoining = "";
  }

  editClick(emp:any)
  {
    this.modalTitle="Edit Member";
    this.MemberId=emp.scId;
    this.MemberName=emp.Member;
    this.Designation = emp.Desig;
    this.Department=emp.Department;
    this.DateofJoining= emp.Doj;
    this.PhotoFileName=emp.PhotoFileName;
  }

  createClick(){
    var val={
      Member:this.MemberName,
      Desig:this.Designation,
      Department:this.Department,
      Doj:this.DateofJoining,
      PhotoFileName:this.PhotoFileName

    };

    this.http.post(environment.API_URL+'members',val)
    .subscribe(res=>{
      alert(res.toString());
      this.refreshList();
    });
  }

  updateClick(){
    var val={
      scId:this.MemberId,
      Member:this.MemberName,
      Desig:this.Designation,
      Department:this.Department,
      Doj:this.DateofJoining,
      PhotoFileName:this.PhotoFileName
    };

    this.http.put(environment.API_URL+'members',val)
    .subscribe(res=>{
      alert(res.toString());
      this.refreshList();
    });
  }

  deleteClick(id:any){
    if(confirm('Are you sure?')){
    this.http.delete(environment.API_URL+'members/'+id)
    .subscribe(res=>{
      alert(res.toString());
      this.refreshList();
    });
  } }

  imageUpload(event:any)
  {
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('file',file,file.name);
    
    this.http.post(environment.API_URL+'members/SaveFile',formData)
    .subscribe((data:any)=>{
      this.PhotoFileName=data.toString();
    });
  }
  
}
  
  //FilterFn(){
  //  var DepartmentIdFilter=this.DepartmentIdFilter;
  //  var DepartmentNameFilter=this.DepartmentNameFilter;


   // this.departments=this.departmentsWithoutFilter.filter(
  //    function(el:any){
  //      return el.DepartmentId.toString().toLowerCase().includes(
  //        DepartmentIdFilter.toString().trim().toLowerCase()
  //      )&& 
  //        el.DepartmentName.toString().toLowerCase().includes(
  //        DepartmentNameFilter.toString().trim().toLowerCase())
  //    }
  //  );
  //}

  //sortResult(prop:any,asc:any){
  //  this.departments=this.departmentsWithoutFilter.sort(function(a:any,b:any){
  //    if(asc){
  //      return (a[prop]>b[prop])?1:((a[prop]<b[prop])?-1:0);
  //    }
  //    else{
  //      return (b[prop]>a[prop])?1:((b[prop]<a[prop])?-1:0);
  //    }
  //  });


