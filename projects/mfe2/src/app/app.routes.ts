import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'events',
    loadChildren: () => import('./events/events.module')
      .then(m => m.EventsModule)
  }
];
