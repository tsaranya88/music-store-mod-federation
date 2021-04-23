import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsSearchComponent } from './albums-search/albums-search.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './albums.routes';
import { PreOrdersComponent } from './pre-orders/pre-orders.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    AlbumsSearchComponent,
    PreOrdersComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AlbumsModule { }
