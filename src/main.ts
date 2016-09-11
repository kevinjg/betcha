import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

if (process.env.ENV === 'production') {
  enableProdMode();
  platformBrowser().bootstrapModule(AppModule);
} else {
  platformBrowserDynamic().bootstrapModule(AppModule);
}
