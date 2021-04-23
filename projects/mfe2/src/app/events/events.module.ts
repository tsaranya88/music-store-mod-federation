import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsSearchComponent } from './events-search/events-search.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './events.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    EventsSearchComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EventsModule { }
