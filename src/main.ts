import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { TranslateService } from '@ngx-translate/core';

bootstrapApplication(AppComponent, appConfig)
  .then((appRef) => {
    const translateService = appRef.injector.get(TranslateService);
    translateService.addLangs(['en', 'fr']);
    translateService.setDefaultLang('fr');
    const browserLang = translateService.getBrowserLang();
    const langToUse =
      browserLang && browserLang.match(/en|fr/) ? browserLang : 'fr';
    translateService.use(langToUse);
  })
  .catch((err) => console.error(err));
