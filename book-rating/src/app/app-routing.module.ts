import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'book/dashboard', pathMatch: 'full' }, // Default-Route
  // { path: '**', redirectTo: 'book/dashboard' } // Catchall-Route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
