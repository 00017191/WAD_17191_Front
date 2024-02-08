import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddActivityComponent } from './add-activity/add-activity.component';
import { UpdateActivityComponent } from './update-activity/update-activity.component';
import { ActivitiesListComponent } from './activities-list/activities-list.component';

const profileRoutes: Routes = [
    {
        path: '',
        component: ActivitiesListComponent,
        pathMatch: 'full',
    },
    {
        path: 'create',
        component: AddActivityComponent,
        pathMatch: 'full',
    },
    {
        path: 'update/:id',
        component: UpdateActivityComponent,
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forChild(profileRoutes)],
    exports: [RouterModule],
})
export class ActivityRoutingModule {}