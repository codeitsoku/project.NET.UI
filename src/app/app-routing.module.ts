import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SportsdepartmentComponent } from './sportsdepartment/sportsdepartment.component';
import { MembersComponent } from './members/members.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'sportsdepartment',component:SportsdepartmentComponent},
  {path:'members',component:MembersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
