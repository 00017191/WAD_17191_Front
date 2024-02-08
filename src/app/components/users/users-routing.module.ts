import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const profileRoutes: Routes = [
    {
        path: '',
        component: UsersListComponent,
        pathMatch: 'full',
    },
    {
        path: 'create',
        component: AddUserComponent,
        pathMatch: 'full',
    },
    {
        path: 'update/:id',
        component: UpdateUserComponent,
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forChild(profileRoutes)],
    exports: [RouterModule],
})
export class UserRoutingModule {}