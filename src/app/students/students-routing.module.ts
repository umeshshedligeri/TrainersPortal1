import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { StudentregComponent } from './studentreg/studentreg.component'
const routes: Routes = [
  {
    path:'',
    data:{title:'student'},
    children:[
      {path:'student',component:StudentregComponent,data:{title:'student'}},
     
     
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
