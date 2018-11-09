import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from '@angular/router';
import { TrainersModule } from './trainers/trainers.module';
const appRoutes:Routes=[
  
  {
  path:'trainers',
  loadChildren: './trainers/trainers.module#TrainersModule'
 },
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    TrainersModule
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
