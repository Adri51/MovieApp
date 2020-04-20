import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'pelis', pathMatch: 'full' },
  {
    path: 'pelis',
    loadChildren: () => import('./pages/pelis/pelis.module').then(m => m.PelisPageModule)
  },
  {
    path: 'pelis-details',
    loadChildren: () => import('./pages/pelis-details/pelis-details.module').then(m => m.PelisDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
