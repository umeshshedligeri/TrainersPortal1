import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentregComponent } from './studentreg/studentreg.component';

@NgModule({
  imports: [
    CommonModule,
    StudentsRoutingModule
  ],
  declarations: [StudentregComponent],
  exports:[StudentregComponent]
})
export class StudentsModule { }
