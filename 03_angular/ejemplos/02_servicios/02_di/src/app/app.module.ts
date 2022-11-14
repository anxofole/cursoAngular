import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooComponent } from './foo/foo.component';
import { FooChild1Component } from './foo/children/foo.child1.component';
import { FooChild2Component } from './foo/children/foo.child2.component';
import { BarComponent } from './bar/bar.component';
import { BarChild1Component } from './bar/children/bar.child1.component';
import { BarChild2Component } from './bar/children/bar.child2.component';
import { AModule } from './a/a.module';
import { AService } from './a.service';
import { BService } from './b.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    FooComponent,
    FooChild1Component,
    FooChild2Component,
    BarComponent,
    BarChild1Component,
    BarChild2Component
  ],
  imports: [
    BrowserModule,
    AModule,
    SharedModule
  ],
  providers: [
    AService,
    BService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
