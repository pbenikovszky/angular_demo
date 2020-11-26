import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TagListComponent } from './tag-list.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      { path: 'tags', component: TagListComponent }
    ]),
  ],
  exports: [
    RouterModule
  ]
})
export class TagRoutingModule { }
