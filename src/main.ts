import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { CORE_PROVIDERS } from './app/core/core.providers';

bootstrapApplication(AppComponent, {
  providers: [...CORE_PROVIDERS]
});