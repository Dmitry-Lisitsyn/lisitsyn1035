import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemEditComponent } from './item-edit/item-edit.component';

const routes: Routes = [ {
  path: '',
  component: ItemsComponent,
  children: [
    {
      path: '',
      component:ItemListComponent,
    },
    {
      path: 'profile',
      component: ItemEditComponent,
    },
    {
      path: 'profile/:id',
      component: ItemEditComponent,
    },
  ],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
