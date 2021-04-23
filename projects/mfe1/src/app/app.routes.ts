import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    },
    {
      path: 'albums',
      loadChildren: () => import('./albums/albums.module')
            .then(m => m.AlbumsModule)
    }
];
