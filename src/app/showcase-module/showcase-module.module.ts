import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowcaseModuleRoutingModule } from './showcase-module-routing.module';
import { ShowcaseComponent } from './showcase/showcase.component';
import { WidgetModuleModule } from '../widget-module/widget-module.module';

import { ButtonModule } from '../widget-module/button/button.module';
import { IconModule } from '../widget-module/icon/icon.module';
import { ShowcaseButtonComponent } from './showcase-button/showcase-button.component';
import { ShowcaseIconComponent } from './showcase-icon/showcase-icon.component';
import { ShowcaseListComponent } from './showcase-list/showcase-list.component';
import { ListModule } from '../widget-module/list/list.module';
import { ColorPickerModule } from '../widget-module/color-picker/color-picker.module';
import { ProgressbarModule } from '../widget-module/progressbar/progressbar.module';
import { ShowcaseProgressbarComponent } from './showcase-progressbar/showcase-progressbar.component';


@NgModule({
  declarations: [ShowcaseComponent, ShowcaseButtonComponent, ShowcaseIconComponent, ShowcaseListComponent, ShowcaseProgressbarComponent],
  imports: [
    CommonModule,
    ShowcaseModuleRoutingModule,
    WidgetModuleModule,
    ButtonModule,
    IconModule,
    ListModule,
    ColorPickerModule,
    ProgressbarModule
  ],
  exports: [ShowcaseButtonComponent, ShowcaseIconComponent, ShowcaseListComponent]
})
export class ShowcaseModuleModule { }
