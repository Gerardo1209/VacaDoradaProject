import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  importProvidersFrom(HttpClientModule),
  importProvidersFrom(NgModule),
  importProvidersFrom(CommonModule),
  importProvidersFrom(FormsModule) ]

};
