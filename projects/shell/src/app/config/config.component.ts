import { Component, OnInit } from '@angular/core';
import { LookupService } from '../services/lookup.service';
import { Microfrontend } from '../services/microfrontend';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html'
})
export class ConfigComponent implements OnInit {

  constructor(private lookupService: LookupService) { }

  config: Microfrontend[];

  async ngOnInit() {
    this.config = await this.lookupService.lookup();
  }

}
