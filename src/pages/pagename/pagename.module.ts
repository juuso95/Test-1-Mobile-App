import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagenamePage } from './pagename';

@NgModule({
  declarations: [
    PagenamePage,
  ],
  imports: [
    IonicPageModule.forChild(PagenamePage),
  ],
})
export class PagenamePageModule {}
