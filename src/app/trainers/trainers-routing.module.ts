import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'',
    data:{title:'trainers'},
    children:[
      {path:'login',component:LoginComponent,data:{title:'Login'}},
      {path:'',component:HomeComponent,data:{title:'home'}},
      {path:'register',component:RegisterComponent,data:{title:'Register'}      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainersRoutingModule { }
