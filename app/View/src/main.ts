import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
//When you bootstrap with the AppComponent class (in main.ts),
//Angular looks for a <my-app> in the index.html, finds it,
//instantiates an instance of AppComponent, and renders it inside the <my-app> tag.
