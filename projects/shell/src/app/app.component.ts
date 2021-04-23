import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { buildRoutes } from '../menu-utils';
import { LookupService } from './services/lookup.service';
import { Microfrontend } from './services/microfrontend';
import 'music-store-common-sdk/components/menu/index.js';
import 'music-store-common-sdk/components/footer/index.js';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit  {

  microfrontends: Microfrontend[] = [];
  url: string;

  constructor(
    private router: Router,
    private lookupService: LookupService) {
    this.url = this.router.url;

  }

  async ngOnInit(): Promise<void> {
    this.microfrontends = await this.lookupService.lookup();
    const routes = buildRoutes(this.microfrontends);
    this.router.resetConfig(routes);
  }
}

