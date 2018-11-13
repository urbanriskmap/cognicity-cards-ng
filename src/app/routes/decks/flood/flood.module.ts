import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

// Routing module
import { FloodRoutingModule } from './flood-routing.module';

// Parent component
import { FloodComponent } from './flood.component';

// Child components
import { DropdownNotificationComponent } from '../../../components/dropdown-notification/dropdown-notification.component';
import { NavButtonComponent } from '../../../components/nav-button/nav-button.component';
import { TitleBoxComponent } from '../../../components/title-box/title-box.component';

@NgModule({
  imports: [
    CommonModule,
    FloodRoutingModule,
    TranslateModule
  ],
  declarations: [
    FloodComponent,
    NavButtonComponent,
    DropdownNotificationComponent,
    TitleBoxComponent
  ],
  exports: [
    TranslateModule
  ],
  providers: [
    TranslatePipe
  ]
})
export class FloodModule { }
