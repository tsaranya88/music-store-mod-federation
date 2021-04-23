import { Injectable } from '@angular/core';
import { Microfrontend } from './microfrontend';

@Injectable({ providedIn: 'root' })
export class LookupService {
    lookup(): Promise<Microfrontend[]> {
        return Promise.resolve([
            {
                // For Loading
                remoteEntry: 'http://localhost:5001/remoteEntry.js',
                remoteName: 'mfe1',
                exposedModule: './Module',

                // For Routing
                displayName: 'ALBUMS',
                routePath: 'albums',
                ngModuleName: 'AlbumsModule'
            },
            {
                // For Loading
                remoteEntry: 'http://localhost:5002/remoteEntry.js',
                remoteName: 'mfe2',
                exposedModule: './Module',

                // For Routing
                displayName: 'EVENTS',
                routePath: 'events',
                ngModuleName: 'EventsModule'
            }
        ] as Microfrontend[]);
    }
}
