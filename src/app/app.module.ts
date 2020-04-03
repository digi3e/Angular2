import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WaltComponent } from './walt/walt.component';

@NgModule({
  declarations: [
      AppComponent,
      ServerComponent,
      ServersComponent,
      WaltComponent
  ],
  imports: [
      BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }