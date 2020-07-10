import {
  CommonModule,
  DatePipe,
  Location,
  registerLocaleData,
} from '@angular/common';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import localeEn from '@angular/common/locales/en';
import localeEs from '@angular/common/locales/es';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  LocalizeParser,
  LocalizeRouterModule,
  LocalizeRouterSettings,
  ManualParserLoader,
} from '@gilsdav/ngx-translate-router';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalizedDatePipe } from './core/pipes/localized-data.pipe';
import { BaseHttpInterceptor } from './core/services/base-https.interceptor';
import { RegistryComponent } from './registry/registry.component';
import { AngularSharedModule } from './shared/angular-shared.module';
import { ShowerComponent } from './shower/shower.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    RegistryComponent,
    ShowerComponent,
    LocalizedDatePipe,
  ],
  imports: [
    // Core
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularSharedModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    AppRoutingModule,
    LocalizeRouterModule.forRoot(routes, {
      parser: {
        provide: LocalizeParser,
        useFactory: ParserFactory,
        deps: [TranslateService, Location, LocalizeRouterSettings],
      },
      alwaysSetPrefix: true,
    }),
  ],
  providers: [
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(localeEs, 'es');
    registerLocaleData(localeEn, 'en');
  }
}

export function ParserFactory(
  translate: TranslateService,
  location: Location,
  settings: LocalizeRouterSettings,
) {
  return new ManualParserLoader(
    translate,
    location,
    settings,
    ['en', 'es'],
    'YOUR_PREFIX',
  );
}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
