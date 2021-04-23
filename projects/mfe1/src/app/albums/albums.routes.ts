import { Routes } from '@angular/router';
import { AlbumsSearchComponent } from './albums-search/albums-search.component';
import { PreOrdersComponent } from './pre-orders/pre-orders.component';

export const ROUTES: Routes = [
    {
      path: '',
      component: AlbumsSearchComponent
    },
    {
      path: 'pre-orders',
      component: PreOrdersComponent
    }
];
