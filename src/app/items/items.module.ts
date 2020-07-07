import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';
import { ItemEditComponent } from './item-edit/item-edit.component';


@NgModule({
  declarations: [ItemsComponent],
  imports: [
    ItemsRoutingModule,
    ReactiveFormsModule,
    ItemsRoutingModule,
    CommonModule,
   
  ]
})
export class ItemsModule { }
