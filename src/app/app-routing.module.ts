import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { CreateItemComponent } from './components/create-item/create-item.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './components/item-list/item-list.component';
import { UpdateItemComponent } from './components/update-item/update-item.component';

const routes: Routes = [
  { path: '', redirectTo: 'item', pathMatch: 'full' },
  { path: 'items', component: ItemListComponent },
  { path: 'add', component: CreateItemComponent },
  { path: 'update/:id', component: UpdateItemComponent },
  { path: 'details/:id', component: ItemDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }