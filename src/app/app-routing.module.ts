import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'backlog', redirectTo: '/backlog/open', pathMatch: 'full' },
  { path: 'patient', redirectTo: '/patient/registration', pathMatch: 'full' },
  { path: 'tabShow', redirectTo: '/tabShow/registration', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
