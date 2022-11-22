import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceService } from './service.service';
@NgModule({
  declarations: [],
  imports: [CommonModule],
  // providers: [ServiceService],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [ServiceService],
    };
  }
}
