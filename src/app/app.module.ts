import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseHttpInterceptor } from './core/services/base-https.interceptor';
import { AngularSharedModule } from './shared/angular-shared.module';
import { HomeComponent } from './home/home.component';
import { RegistryComponent } from './registry/registry.component';
import { ShowerComponent } from './shower/shower.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, RegistryComponent, ShowerComponent],
  imports: [
    // Core
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularSharedModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
