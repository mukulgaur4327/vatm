import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from '../app.routes';
import { authInterceptor } from './interceptors/auth.interceptor';

export const CORE_PROVIDERS = [
  provideHttpClient(
    withInterceptors([authInterceptor])
  ),
  provideRouter(routes, withComponentInputBinding())
];