import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PageComponent } from './page.component';
import { ProgressComponent } from './progress/progress.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PageComponent],
  imports: [
    CommonModule,SharedModule,RouterModule
  ]
})
export class PageModule { }
