import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  {
    path: 'users',
    loadChildren: () =>
        import('./components//users/users.module').then(
            (m) => m.UsersModule
        ),
    data: { breadcrumb: { skip: true } },
  },
  {
    path: 'activities',
    loadChildren: () =>
        import('./components//activities/activities.module').then(
            (m) => m.ActivitiesModule
        ),
    data: { breadcrumb: { skip: true } },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
