import { environment } from '../environments/environment';
import { InjectionToken } from '@angular/core';

export interface AppConfig {
  endpoint: string;
}

export const APP_CONFIG: AppConfig = {
  endpoint: environment.endpoint
};

export const APP_CONFIG_TOKEN = new InjectionToken<AppConfig>('config');
