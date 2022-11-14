import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZComponent } from './z/z.component';
import { AService } from '../a.service';
import { BService } from '../b.service';
import { SharedModule } from '../shared/shared.module';
import { ApiService } from '../shared/api.service';

@NgModule({
  declarations: [ZComponent],
  providers: [
    AService,
    BService,
    ApiService
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ZComponent
  ]
})
export class AModule { }
