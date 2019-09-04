import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetModuleRoutingModule } from './widget-module-routing.module';
import { ListItemComponent } from './list-item/list-item.component';


@NgModule({
  imports: [
    CommonModule,
    WidgetModuleRoutingModule,
  ],
  exports:[ ListItemComponent],
  declarations: [ListItemComponent]
})
export class WidgetModuleModule { }