import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TargetedPage } from './targeted';

@NgModule({
  declarations: [
    TargetedPage,
  ],
  imports: [
    IonicPageModule.forChild(TargetedPage),
  ],
})
export class TargetedPageModule {}
