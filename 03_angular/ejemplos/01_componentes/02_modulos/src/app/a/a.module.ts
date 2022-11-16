import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooComponent } from './foo/foo.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FooComponent],
  exports: [FooComponent],
})
export class AModule {}
