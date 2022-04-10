import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PageComponent } from './page.component';
import { ProgressComponent } from './progress/progress.component';


const routes : Routes = [
  {path:'dashboard',component:PageComponent,
  children : [

    {path:'',component: DashboardComponent},
    {path:'progress',component: ProgressComponent},
    {path:'grafica1',component: Grafica1Component},
   
  ]
  
  }
  

  

]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
