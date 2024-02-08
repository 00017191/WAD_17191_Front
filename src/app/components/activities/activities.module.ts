import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesListComponent } from './activities-list/activities-list.component';
import { AddActivityComponent } from './add-activity/add-activity.component';
import { UpdateActivityComponent } from './update-activity/update-activity.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ActivityRoutingModule } from './activities-routing.module';



@NgModule({
  declarations: [
    ActivitiesListComponent,
    AddActivityComponent,
    UpdateActivityComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    ActivityRoutingModule
  ], 
  exports: [
    ActivitiesListComponent,
    AddActivityComponent,
    UpdateActivityComponent
  ]
})
export class ActivitiesModule { }
