import { NgModule } from '@angular/core';
import { TagListComponent } from './tag-list.component';
import { ConvertStateToText } from './convert-state-to-text.pipe';
import { SharedModule } from '../shared/shared.module';
import { TagRoutingModule } from './tag-routing.module';



@NgModule({
  declarations: [
    TagListComponent,
    ConvertStateToText
  ],
  imports: [
    SharedModule,
    TagRoutingModule
  ]
})
export class TagModule { }
