import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesListComponent } from './activities-list/activities-list.component';
import { AddActivityComponent } from './add-activity/add-activity.component';
import { UpdateActivityComponent } from './update-activity/update-activity.component';



@NgModule({
  declarations: [
    ActivitiesListComponent,
    AddActivityComponent,
    UpdateActivityComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ActivitiesModule { }
