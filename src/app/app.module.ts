import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { routing, app_routing_providers } from './app.routing';

import { AppComponent } from './app.component';
import { UserComponent } from './Components/user/user.component';
import { RepoComponent } from './Components/repo/repo.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RepoComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    app_routing_providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
