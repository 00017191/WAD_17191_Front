import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';



@NgModule({
  declarations: [
    UsersListComponent,
    AddUserComponent,
    UpdateUserComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
