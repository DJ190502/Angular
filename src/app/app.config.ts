import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import {provideRouter,RouterModule,withViewTransitions,} from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi, } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withViewTransitions()),
    //Aqui importamos todo los providers que de manera normal lo hubiera importados
    provideHttpClient()
  ],
};
