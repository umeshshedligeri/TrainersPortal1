import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from '@angular/router';
import { TrainersModule } from './trainers/trainers.module';
import { StudentsModule } from './students/students.module';
const appRoutes:Routes=[
  
  {
  path:'trainers',
  loadChildren: './trainers/trainers.module#TrainersModule'
 },
 {
  path:'students',
  loadChildren: './students/students.module#StudentsModule'
 },
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    TrainersModule,
    StudentsModule
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
