import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sportsdepartment',
  templateUrl: './sportsdepartment.component.html',
  styleUrls: ['./sportsdepartment.component.css']
})
export class SportsdepartmentComponent implements OnInit 
{

  constructor(private http:HttpClient) { }
  sportsdepartments:any=[];

  modalTitle ="";
  DepartmentId = 0;
  DepartmentName = "";

  // DepartmentIdFilter="";
  // DepartmentNameFilter="";
  // departmentsWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(){
    this.http.get<any>(environment.API_URL+'sportsdepartment')
    .subscribe(data=>{
      this.sportsdepartments=data;
    });
  }

  addClick(){
    this.modalTitle="Add Department";
    this.DepartmentId=0;
    this.DepartmentName="";
  }

  editClick(dep:any){
    this.modalTitle="Edit Department";
    this.DepartmentId=dep.DeptId;
    this.DepartmentName=dep.DeptName;
  }

  createClick(){
    var val={
      DeptName:this.DepartmentName
    };

    this.http.post(environment.API_URL+'sportsdepartment',val)
    .subscribe(res=>{
      alert(res.toString());
      this.refreshList();
    });
  }

  updateClick(){
    var val={
      DeptId:this.DepartmentId,
      DeptName:this.DepartmentName
    };

    this.http.put(environment.API_URL+'sportsdepartment',val)
    .subscribe(res=>{
      alert(res.toString());
      this.refreshList();
    });
  }

  deleteClick(id:any){
    if(confirm('Are you sure?')){
    this.http.delete(environment.API_URL+'sportsdepartment/'+id)
    .subscribe(res=>{
      alert(res.toString());
      this.refreshList();
    });
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
}
}
