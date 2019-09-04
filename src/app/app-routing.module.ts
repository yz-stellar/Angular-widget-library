import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'showcase/button',
    pathMatch: 'full'
  },
  {
    path:'showcase',
    loadChildren: () => import('./showcase-module/showcase-module.module')
      .then(m => m.ShowcaseModuleModule) 
  },
  {
    path:'dashboard',
    loadChildren: () => import('./dashboard-module/dashboard-module.module')
      .then(m=>m.DashboardModuleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
