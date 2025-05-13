import { ApplicationConfig } from '@angular/core';
import { provideRouter, UrlSerializer } from '@angular/router';

import { routes } from './app.routes';
import { TrailingSlashUrlSerializer } from '../trailingSlash';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    {provide: UrlSerializer, useClass: TrailingSlashUrlSerializer}
  ],
};
