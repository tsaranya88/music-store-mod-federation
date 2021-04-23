import {Component, ViewChild, ViewContainerRef, Inject, Injector, ComponentFactoryResolver, OnInit} from '@angular/core';

@Component({
  selector: 'app-events-search',
  styleUrls: ['./events-search.component.css'],
  templateUrl: './events-search.component.html'
})
export class EventsSearchComponent {

  @ViewChild('vc', { read: ViewContainerRef, static: true })
  viewContainer: ViewContainerRef;

  constructor(
    @Inject(Injector) private injector,
    @Inject(ComponentFactoryResolver) private cfr) { }

  learnMore() {
    alert('Not implemented for this demo!');
  }
}
