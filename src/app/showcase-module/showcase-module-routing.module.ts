import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowcaseComponent } from './showcase/showcase.component';
import { ShowcaseButtonComponent } from './showcase-button/showcase-button.component';
import { ShowcaseIconComponent } from './showcase-icon/showcase-icon.component';
import { ShowcaseListComponent } from './showcase-list/showcase-list.component';
import { ShowcaseProgressbarComponent } from './showcase-progressbar/showcase-progressbar.component';

const routes: Routes = [
  {
    path: '',
    component: ShowcaseComponent,
    children: [
      {
        path: 'button',
        component: ShowcaseButtonComponent
      },
      {
        path: 'icon',
        component: ShowcaseIconComponent
      },
      {
        path: 'list',
        component: ShowcaseListComponent
      },
      {
        path: 'progressbar',
        component: ShowcaseProgressbarComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowcaseModuleRoutingModule { }
